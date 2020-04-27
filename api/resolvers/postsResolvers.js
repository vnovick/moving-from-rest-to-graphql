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
    posts: async (_, args, context) => {
      // TODO: Switch to using REST dataSource that will be accessed on context argument
      const result = await fetch(`http://localhost:3001/api/posts`)
      const postsResult = await result.json()

      // Order first
      const posts = args.order
        ? sort(postsResult, 'id', args.order)
        : postsResult

      // Limit
      const limitedPosts = args.limit ? limit(posts, args.limit) : posts
      return limitedPosts.map((post) => ({
        ...post,
        author: post.authorId,
      }))

      return posts
    },
  },
}

module.exports = {
  postsResolvers,
}
