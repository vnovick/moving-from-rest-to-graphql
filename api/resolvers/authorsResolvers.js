const fetchDataFromDataSource = async ({field, dataSource}, authorId) => {
  const result = await dataSource.getAuthorById(authorId)
  return result[field]
}

const authorsResolvers = {
  Author: {
    name: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'name',
          // TODO: Switch to different data source
          dataSource: dataSources.postsAPI,
        },
        authorId,
      )
    },
    avatarUrl: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'avatarUrl',
          // TODO: Switch to different data source
          dataSource: dataSources.postsAPI,
        },
        authorId,
      )
    },
  },
}

module.exports = {
  authorsResolvers,
}
