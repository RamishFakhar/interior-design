import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { 
  Box, 
  Heading, 
  Divider, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  Button, 
  Flex,
  Text,
  Icon,
  Stack
} from '@chakra-ui/core'

const ContactPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Box pt="100px" px={['1.5em', '1.5em', '1.5em', '15%']}>
        <Heading as="h1" size="xl" mb="8">
          Contact Us
        </Heading>
        
        <Flex direction={["column", "column", "row"]} my="10">
          <Box flex="1" pr={[0, 0, 10]} mb={[10, 10, 0]}>
            <Heading as="h3" size="md" mb="6">Get in Touch</Heading>
            <Text mb="6">
              We're excited to hear from you! Whether you're looking to transform your space
              or have questions about our services, we're here to help.
            </Text>
            
            <Stack spacing={4}>
              <Flex align="center">
                <Icon name="phone" mr="3" color="yellow.400" />
                <Text>+1 (212) 555-7890</Text>
              </Flex>
              <Flex align="center">
                <Icon name="email" mr="3" color="yellow.400" />
                <Text>info@interiordesign.com</Text>
              </Flex>
              <Flex align="center">
                <Icon name="location" mr="3" color="yellow.400" />
                <Text>123 Design Street, New York, NY 10001</Text>
              </Flex>
            </Stack>
          </Box>
          
          <Box flex="1" bg="gray.50" p="8" borderRadius="md">
            <form>
              <FormControl mb="4">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input id="name" placeholder="Your Name" />
              </FormControl>
              
              <FormControl mb="4">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder="Your Email" />
              </FormControl>
              
              <FormControl mb="4">
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input id="subject" placeholder="Subject" />
              </FormControl>
              
              <FormControl mb="6">
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea id="message" placeholder="Your Message" h="150px" />
              </FormControl>
              
              <Button 
                bg="yellow.400" 
                _hover={{ bg: "yellow.500" }} 
                size="lg" 
                width="full">
                Send Message
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default ContactPage 