const fetch = require('node-fetch')

const postsResolvers = {
  Query: {
    posts: async (_) => {
      const postsResult = await fetch(`http://localhost:3001/api/posts`)
      const posts = await postsResult.json()

      // ------ Extra Credit 1 ---------
      // return posts.map((post) => ({
      //   ...post,
      //   author: post.authorId,
      // }))

      // ------- Extra credit 2 -----------

      // const authors = await posts.reduce(async (acc, post) => {
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
      // console.log(
      //   posts.map((post) => ({
      //     ...post,
      //     author: authors[post.authorId],
      //   })),
      // )
      // return posts.map((post) => ({
      //   ...post,
      //   author: authors[post.authorId],
      // }))

      // ----------- Extra credit 2 -------------
      return posts
    },
  },
}

module.exports = {
  postsResolvers,
}
