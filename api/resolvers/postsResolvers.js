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
  Mutation: {
    insertPost: async (_, {input}, {dataSources}) => {
      return dataSources.postsJsonAPI.insertPost(input)
    },
  },
  Query: {
    posts: async (_, args, {dataSources}) => {
      const postsResult = await dataSources.postsJsonAPI.getPosts()

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
