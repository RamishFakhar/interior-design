import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import About from '../components/about'
import { Box, Heading, Divider } from '@chakra-ui/core'

const AboutPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Box pt="100px" px={['1.5em', '1.5em', '1.5em', '15%']}>
        <Heading as="h1" size="xl" mb="8">
          About Us
        </Heading>
        <About />
      </Box>
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default AboutPage 