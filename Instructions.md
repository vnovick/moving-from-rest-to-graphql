# Exercise Exercise 7 - Migrate to the same data source

## Background

```sh
cd api
npm install
```

#### Files

These files should be modified during exercise. They also include **TODO**
comments for your convenience

- `app.js`
- `data/postsJsonDataSource.js`
- `types/authorType.js`
- `types/mutation.js`
- `resolvers/postsResolvers.js`
- `resolvers/authorsResolvers.js`

## Instructions

In this exercise we will migrate create Mutations for creating a new user and
post.

**Steps:**

1. Define `insertAuthor` root mutation in `query` that accepts `AuthorInputType`
2. Create a resolver in `authorsResolvers.js` that will call
   `postsJsonAPI.insertAuthor` function
3. Implement `insertAuthor` function in `postsJsonDataSource.js`
4. Create a new root Mutation `insertPost` and configure it to accept
   `PostInputType` input type. Input type should have required `authorId`
5. Implement `insertPost` resolver to insert a post

## Extra Credit

- Configure `insertPost` mutation to accept both `authorId` or `AuthorInputType`
- Implement resolver, so we can insert both post and user in one mutation
