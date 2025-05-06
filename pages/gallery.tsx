import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import OurProject from '../components/our-projects'
import { Box, Heading, Divider } from '@chakra-ui/core'

const GalleryPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Box pt="100px" px={['1.5em', '1.5em', '1.5em', '15%']}>
        <Heading as="h1" size="xl" mb="8">
          Our Gallery
        </Heading>
        <OurProject />
      </Box>
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default GalleryPage 