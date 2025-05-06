import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { Box, Heading, Divider, SimpleGrid, Text, Image } from '@chakra-ui/core'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Modern Interior Design Trends',
      excerpt: 'Explore the latest trends in modern interior design that you can incorporate into your home.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette',
      excerpt: 'Learn how to select a cohesive color palette that transforms your living space.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Small Space Solutions',
      excerpt: 'Discover creative solutions for maximizing functionality in small apartments and homes.',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <>
      <Nav />
      <Box pt="100px" px={['1.5em', '1.5em', '1.5em', '15%']}>
        <Heading as="h1" size="xl" mb="8">
          Our Blog
        </Heading>
        
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" mb="10">
          {blogPosts.map(post => (
            <Box key={post.id} boxShadow="md" borderRadius="lg" overflow="hidden">
              <Image src={post.image} alt={post.title} h="200px" objectFit="cover" />
              <Box p="6">
                <Heading as="h3" size="md" mb="2">{post.title}</Heading>
                <Text>{post.excerpt}</Text>
                <Text color="yellow.500" mt="4" fontWeight="bold" cursor="pointer">Read more →</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default BlogPage 