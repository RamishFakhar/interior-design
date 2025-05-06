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
  Checkbox,
  useToast
} from '@chakra-ui/core'
import NextLink from 'next/link'

const LoginPage: React.FC = () => {
  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Login successful.",
      description: "You're now logged in!",
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
              Log In
            </Heading>
            
            <form onSubmit={handleSubmit}>
              <FormControl mb="4" isRequired>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input id="email" type="email" placeholder="Enter your email" />
              </FormControl>
              
              <FormControl mb="6" isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" placeholder="Enter your password" />
              </FormControl>
              
              <Flex justify="space-between" align="center" mb="6">
                <Checkbox>Remember me</Checkbox>
                <Link color="yellow.500" fontSize="sm">Forgot password?</Link>
              </Flex>
              
              <Button 
                type="submit" 
                bg="yellow.400" 
                _hover={{ bg: "yellow.500" }} 
                size="lg" 
                width="full" 
                mb="4">
                Log In
              </Button>
              
              <Text textAlign="center">
                Don't have an account?{' '}
                <NextLink href="/signup" passHref>
                  <Link color="yellow.500">Sign up</Link>
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

export default LoginPage 