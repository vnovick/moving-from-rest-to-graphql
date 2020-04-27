const {RESTDataSource} = require('apollo-datasource-rest')

class PostsRESTAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3001/api'
  }

  async getPosts() {
    return this.get(`posts`)
  }

  async getAuthorById(id) {
    return this.get(`authors/${id}`)
  }
}

module.exports = {
  PostsRESTAPI,
}
