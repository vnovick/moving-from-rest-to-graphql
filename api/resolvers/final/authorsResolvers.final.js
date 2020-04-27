// ------- Extra Credit --------------
// const fetchDataFromDataSource = async ({field, dataSource}, authorId) => {
//   const result = await dataSource.getAuthorById(authorId)
//   return result[field]
// }

const authorsResolvers = {
  Author: {
    // ----------- Extra Credit ----------
    // name: async (authorId, args, {dataSources}) => {
    //   return fetchDataFromDataSource(
    //     {
    //       field: 'name',
    //       dataSource: dataSources.postsAPI,
    //     },
    //     authorId,
    //   )
    // },
    // avatarUrl: async (authorId, args, {dataSources}) => {
    //   return fetchDataFromDataSource(
    //     {
    //       field: 'avatarUrl',
    //       dataSource: dataSources.postsAPI,
    //     },
    //     authorId,
    //   )
    // },
    name: async (authorId, args, {dataSources}) => {
      const author = await dataSources.postsAPI.getAuthorById(authorId)
      return author.name
    },
    avatarUrl: async (authorId, args, {dataSources}) => {
      const author = await dataSources.postsAPI.getAuthorById(authorId)
      return author.avatarUrl
    },
  },
}

module.exports = {
  authorsResolvers,
}
