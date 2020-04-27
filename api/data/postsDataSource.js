const {RESTDataSource} = require('apollo-datasource-rest')

class PostsRESTAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3001/api'
  }

  async getPosts() {
    return this.get(`posts`)
  }

  // TODO: Implement getting authors by Id async method
}

module.exports = {
  PostsRESTAPI,
}
