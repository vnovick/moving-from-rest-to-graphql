# Exercise 4 - Explore GraphQL queries and mutations

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
- `resolvers/postsResolvers.js` - will export resolvers relevant to posts
- `resolvers/authorsResolvers.js` - will export resolvers relevant to authors

## Instructions

We want to get in the end of this exercise to the point where we are able to run
the following query:

```graphql
query getPosts {
  posts {
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
        "id": "1",
        "title": "Minim adipisicing deserunt incididunt occaecat veniam.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "2",
        "title": "Velit duis ullamco dolor nostrud fugiat laboris ad magna ad velit ullamco.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "3",
        "title": "Amet mollit eiusmod enim velit magna incididunt commodo reprehenderit do.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "4",
        "title": "Mollit Lorem velit in aute laborum.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "5",
        "title": "Ullamco elit in quis sit aliquip consectetur nulla.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "6",
        "title": "Ex dolor exercitation nisi officia elit sit excepteur nisi commodo sunt id labore.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "7",
        "title": "Lorem dolor aliqua culpa Lorem cillum nostrud est aliquip duis nostrud nulla incididunt mollit cupidatat.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "8",
        "title": "Ex cupidatat laborum ipsum nulla minim duis anim.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "9",
        "title": "Excepteur cupidatat Lorem in do occaecat.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "10",
        "title": "Ea do irure aliqua mollit amet ex proident.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "11",
        "title": "Laboris nulla pariatur incididunt velit voluptate ea.",
        "author": {
          "name": "Name",
          "avatarUrl": "Avatar Url"
        }
      },
      {
        "id": "12",
        "title": "Reprehenderit excepteur quis nulla dolore elit est velit laboris et adipisicing Lorem adipisicing labore.",
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

posts should be brought from `http://localhost:3001/api/posts` and author name
and avatar url should be resolved from `Author` type resolver

You can run final version of the app by executing `npm run start:final` and
exploring the final version

**Steps:**

1. Write a new query definition to query all posts in `typeDefs/query.js`
2. Define Author type in `typeDefs/authorType.js` and Post type in `postType`.
   Import these types in `typeDefs/index.js` (Uncomment the code there)
3. Create posts root query resolver in `resolvers/postsResolvers.js`
4. Use
   [`async` resolver](https://graphql.org/learn/execution/#asynchronous-resolvers)
   to fetch all posts data from `http://localhost:3001/api/posts` and return it
   from resolver
5. Create Author type resolver that will include resolvers for two fields
   `avatarUrl` and `name`. They need to return result as in sample payload above

## Extra credit:

1. load `avatarUrl` from actual author endpoint
2. reuse frontend logic from `PostsPage` to load deduplicated requests for
   authors on root level

> Hint: in order to pass `authorId` to Author resolver you need to map over
> posts and return `author: posts.authorId`. Then to access it from `async`
> resolver you can use first argument of resolver function
