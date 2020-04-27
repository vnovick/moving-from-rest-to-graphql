const fetch = require('node-fetch')

// Sorting helper function to sort either ASC or DESC
const sort = (data, sortingKey, order) =>
  data.sort(
    order === 'ASC'
      ? (a, b) => a[sortingKey] - b[sortingKey]
      : (a, b) => b[sortingKey] - a[sortingKey],
  )

// Limit helper function to accept data and limit number
const limit = (data, limit) => data.slice(0, limit)

const postsResolvers = {
  Query: {
    posts: async (_, args) => {
      const result = await fetch(`http://localhost:3001/api/posts`)
      const postsResult = await result.json()
      const posts = args.order ? sort(postsResult, 'id', args.order) : args
      const limitedPosts = args.limit ? limit(posts, args.limit) : posts
      return limitedPosts.map((post) => ({
        ...post,
        author: post.authorId,
      }))

      // ------- Extra credit -----------

      // const authors = await limitedPosts.reduce(async (acc, post) => {
      //   const accResolved = await acc
      //   if (accResolved[post.authorId]) {
      //     return acc
      //   }
      //   const res = await fetch(
      //     `http://localhost:3000/api/authors/${post.authorId}`,
      //   )
      //   const profile = await res.json()
      //   return {
      //     ...accResolved,
      //     [post.authorId]: profile,
      //   }
      // }, {})
      // return limitedPosts.map((post) => ({
      //   ...post,
      //   author: authors[post.authorId],
      // }))

      return posts
    },
  },
}

module.exports = {
  postsResolvers,
}
