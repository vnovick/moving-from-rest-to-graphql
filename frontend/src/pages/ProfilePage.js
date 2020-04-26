import React, {useEffect, useState} from 'react'
import logo from '../logo.svg'
import {
  Box,
  Grid,
  Image,
  Divider,
  Stack,
  Text,
  Link,
  IconButton,
} from '@chakra-ui/core'
import {Post} from '../components/Post'
import {useParams, Link as NavLink} from 'react-router-dom'

function ProfilePage() {
  const [author, setAuthor] = useState({})
  let {userId} = useParams()

  async function getAuthor() {
    const result = await fetch(`http://localhost:3000/api/authors/${userId}`)
    const author = await result.json()
    setAuthor(author)
  }
  useEffect(() => {
    getAuthor()
  }, [])
  return (
    <Box key={author.id} p={4} display={{md: 'flex'}} boxShadow="md">
      <Box flexShrink="0">
        <Image
          rounded="lg"
          width={{md: 150}}
          src={author.avatarUrl}
          alt="Dummy image"
        />
      </Box>
      <Box mt={{base: 4, md: 0}} ml={{md: 6}}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {author.name}
        </Text>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href="#"
        >
          {author.title}
        </Link>
        <Text mt={2} color="gray.500">
          {author.bio}
        </Text>
        <Divider />
        <Stack isInline>
          <Text mt={3}>
            <Link fontWeight="semibold">Email:</Link> {author.email}
          </Text>
          <Text mt={3}>
            <Link fontWeight="semibold">Twitter: </Link>
            {author.twitter}
          </Text>
        </Stack>
        <NavLink to="/">
          <IconButton
            variantColor="teal"
            aria-label="Call Segun"
            size="sm"
            icon="chevron-left"
          />
        </NavLink>
      </Box>
    </Box>
  )
}

export default ProfilePage
