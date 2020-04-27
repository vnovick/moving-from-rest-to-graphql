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
    // ----- Extra Credit ----
    // const cache = await this.keyValueCache.get(CACHE_KEY)
    // if (!cache) {
    //   console.log(`File access for${key}`)
    //   const result = await readFile(this.jsonDbPath)
    //   const parsedResult = JSON.parse(result)
    //   await this.keyValueCache.set(CACHE_KEY, parsedResult)
    //   return parsedResult[key]
    // }
    // return cache[key]
    console.log(`File access for ${key}`)
    const result = await readFile(this.jsonDbPath)
    const parsedResult = JSON.parse(result)
    return parsedResult[key]
  }

  async getPosts() {
    const posts = await this.get(`posts`)
    return posts
  }

  async getAuthorById(id) {
    const authors = await this.get(`authors`)
    return authors.filter((author) => author.id === id)[0]
  }
}

module.exports = {
  PostsJsonDataSource,
}
