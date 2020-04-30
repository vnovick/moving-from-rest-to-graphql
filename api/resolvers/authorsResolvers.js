const fetchDataFromDataSource = async ({field, dataSource}, authorId) => {
  const result = await dataSource.getAuthorById(authorId)
  return result[field]
}

const authorsResolvers = {
  Mutation: {
    insertAuthor: async (_, {input}, {dataSources}) => {
      return dataSources.postsJsonAPI.insertAuthor(input)
    },
  },
  Author: {
    name: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'name',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
    avatarUrl: async (authorId, args, {dataSources}) => {
      return fetchDataFromDataSource(
        {
          field: 'avatarUrl',
          dataSource: dataSources.postsJsonAPI,
        },
        authorId,
      )
    },
  },
}

module.exports = {
  authorsResolvers,
}
