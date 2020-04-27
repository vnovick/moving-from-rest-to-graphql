const {DataSource} = require('apollo-datasource')
const {InMemoryLRUCache} = require('apollo-server-caching')
const path = require('path')
const fs = require('fs')
const util = require('util')

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile)

const CACHE_KEY = 'postsJsonCache'

class PostsJsonDataSource extends DataSource {
  constructor() {
    super()
    // Creating InMemoryCache
    this.keyValueCache = new InMemoryLRUCache()
    this.jsonDbPath = path.resolve(__dirname, '../db.json')
  }

  //Caching our json file and limiting access to file
  async get(key) {
    console.log(`File access for ${key}`)
    //TODO: read file
  }

  async getPosts() {
    //TODO: implement get Posts using `get` function
  }

  async getAuthorById(id) {
    //TODO: implement getAuthorById and filter.
  }
}

module.exports = {
  PostsJsonDataSource,
}
