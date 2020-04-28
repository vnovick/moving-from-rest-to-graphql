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
- `data/postsJsonDataSource.js` - will include Custom JSON Data Source to access
  our json file
- `resolvers/postsResolvers.js` - switch using JSON data source
- `resolvers/authorsResolvers.js` - switch using JSON data source

## Instructions

In this exercise we will migrate our posts and authors resolvers to different
dataSource. Note that we can gradually migrate simply by switching reference to
different data sources

**Steps:**

1. Add a new data source in `app.js`

```javascript
  postsJsonAPI: new PostsJsonDataSource(),
```

2. Implement `get` function in `data/postsJsonDataSource.js` using

```javascript
const result = await readFile(this.jsonDbPath)
const parsedResult = JSON.parse(result)
```

3. In `data/postsJsonDataSource.js` implement `getPosts` method and
   `getAuthorById` methods
4. Change data source in `postsResolver`
5. Execute the following query:

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

Notice that in our api log we will see both request to REST endpoints for
authors and `File access for posts` as well as `REST` API calls

6. Switch both posts and authors using json data source by accessing it through
   resolver context

## Extra Credit

- Implement simple cache in `postsJsonDataSource`

```javascript
// Get item from the cache
const cache = await this.keyValueCache.get(CACHE_KEY)

// Write item into cache
await this.keyValueCache.set(CACHE_KEY, parsedResult)
```
