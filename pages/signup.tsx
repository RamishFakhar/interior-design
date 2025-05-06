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
  Button, 
  Text,
  Link,
  Flex,
  useToast
} from '@chakra-ui/core'
import NextLink from 'next/link'

const SignupPage: React.FC = () => {
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Account created.",
      description: "Your account has been successfully created!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <>
      <Nav />
      <Box pt="100px" px={['1.5em', '1.5em', '1.5em', '15%']}>
        <Flex justify="center">
          <Box 
            maxW="500px" 
            w="100%" 
            p={8} 
            borderWidth={1}
            borderRadius="lg"
            boxShadow="lg"
          >
            <Heading as="h1" size="xl" textAlign="center" mb="6">
              Create an Account
            </Heading>
            
            <form onSubmit={handleSubmit}>
              <FormControl mb="4" isRequired>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <Input id="name" placeholder="Enter your full name" />
              </FormControl>
              
              <FormControl mb="4" isRequired>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type="email" placeholder="Enter your email" />
              </FormControl>
              
              <FormControl mb="4" isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" placeholder="Create a password" />
              </FormControl>
              
              <FormControl mb="6" isRequired>
                <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
                <Input id="confirm-password" type="password" placeholder="Confirm your password" />
              </FormControl>
              
              <Button 
                type="submit" 
                bg="yellow.400" 
                _hover={{ bg: "yellow.500" }} 
                size="lg" 
                width="full" 
                mb="4">
                Sign Up
              </Button>
              
              <Text textAlign="center">
                Already have an account?{' '}
                <NextLink href="/login" passHref>
                  <Link color="yellow.500">Log in</Link>
                </NextLink>
              </Text>
            </form>
          </Box>
        </Flex>
      </Box>
      <Divider mt="24" />
      <Footer />
    </>
  )
}

export default SignupPage 