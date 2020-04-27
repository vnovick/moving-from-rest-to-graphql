const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const jsonServer = require('json-server')
const {ApolloServer, gql} = require('apollo-server-express')
const {typeDefs} = require('./typeDefs/index.final')
const {resolvers} = require('./resolvers/final')
const app = express()
const {PostsRESTAPI} = require('./data/postsDataSource')
const {PostsJsonDataSource} = require('./data/postsJsonDataSource.final')
///////////Here we will start GraphQL implementation

// Construct a schema, using GraphQL schema language

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      postsAPI: new PostsRESTAPI(),
      postsJsonAPI: new PostsJsonDataSource(),
    }
  },
  mocks: true,
  mockEntireSchema: false,
})

server.applyMiddleware({app})

//////////////// End of GraphQL section

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

//----------------------------------------------------

// JSON server mocks

app.use('/api', jsonServer.router('db.json'))

//----------------------------------------------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(err)
})

module.exports = app
