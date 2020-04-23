import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {Box, Grid} from '@chakra-ui/core'
import PostsPage from './pages/PostsPage'
import ProfilePage from './pages/ProfilePage'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Box className="App">
        <Switch>
          <Route exact path="/">
            <PostsPage />
          </Route>
          <Route path="/users/:userId">
            <ProfilePage />
          </Route>
        </Switch>
      </Box>
    </Router>
  )
}

export default App
