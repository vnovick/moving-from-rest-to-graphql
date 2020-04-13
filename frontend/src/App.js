import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Grid } from '@chakra-ui/core';
import { Post } from './components/Post';


function App() {
  const [posts, setPosts] = useState([])

  async function getPosts(){
    const result = await fetch('http://localhost:3000/api/posts'); 
    const json = await result.json();
    const authors = await json.reduce(async (acc, post) => {
      const accResolved = await acc;
      if (accResolved[post.authorId]) {
        return acc
      } 
      const res = await fetch(`http://localhost:3000/api/authors/${post.authorId}`)
      const profile = await res.json()
      return {
        ...accResolved,
        [post.authorId]: profile
      }
    }, {})
    console.log(authors)
    setPosts(json.map(post => ({
      ...post,
      ...authors[post.authorId]
    })));
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Box className="App">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        { posts.map(Post)}
      </Grid>
    </Box>
  );
}

export default App;
