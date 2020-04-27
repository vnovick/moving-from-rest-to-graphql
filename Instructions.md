# Exercise Exercise 6 - Batch REST requests with REST Data Source

## Background

```sh
cd api
npm install
```

Our `api` includes a new dependency: `apollo-datasource-rest`

typically you install it by running

```sh
npm install apollo-datasource-rest --save
```

but I've included it in package.json already.

#### Files

These files should be modified during exercise. They also include **TODO**
comments for your convenience

- `app.js`
- `data/postsDataSource.js` - will include RESTDataSource
- `resolvers/postsResolvers.js` - will switch to use data source
- `resolvers/authorsResolvers.js` - will switch to use data source

## Note

Before starting out note the amount of REST calls executed on the server. You
can see it by looking into our api output in terminal. We will see something
like this:

```sh
GET /api/posts 200 7.345 ms - 7046
GET /api/authors/3 200 4.673 ms - 458
GET /api/authors/3 200 4.624 ms - 458
GET /api/authors/2 200 4.681 ms - 457
GET /api/authors/2 200 6.653 ms - 457
GET /api/authors/3 200 6.802 ms - 458
GET /api/authors/3 200 6.930 ms - 458
```

## Instructions

In previous exercise you've noticed that you have lots of unneeded requests to
REST api endpoint. In this exercise we will batch and dedupe our REST requests
using `apollo-datasource-rest`. In the end we will execute only necessary
requests to REST api endpoint.

In the end of exercise that's how our log in terminal should look like

```sh
GET /api/posts 200 6.808 ms - 7046
GET /api/authors/2 200 3.110 ms - 457
GET /api/authors/3 200 3.866 ms - 458
```

**Steps:**

1. explore `data/postsDataSource.js` and implement `getAuthorById` method
2. provide data source to `ApolloServer`

```javascript
  dataSources: () => {
    return {
      postsAPI: new PostsRESTAPI(),
    }
  },
```

2. Switch both posts and authors using data source by accessing it through
   resolver context

## Extra Credit

- In `authorsResolver` abstract dataSource access into separate function
