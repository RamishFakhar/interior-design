import React from 'react'
import { Box, Flex, Link, Button, Stack } from '@chakra-ui/core'
import Logo from './logo'
import NextLink from 'next/link'

interface MenuItem {
  link?: string
}

const MenuItems: React.FC<MenuItem> = ({ children, link }) => (
  <NextLink href={link || '/'} passHref>
    <Link
      mt={[4, 4, 0, 0]}
      mr={'36px'}
      display="block"
      fontWeight="medium"
      fontSize="md"
    >
      {children}
    </Link>
  </NextLink>
)

const Nav = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      zIndex={999}
      width="100%"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingX={['1.5em', '1.5em', '1.5em', '15%']}
      paddingY="1.5em"
      bg="rgba(255,255,255,.8)"
      color="black"
      textTransform="uppercase"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#FBA442"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', 'auto', 'auto']}
        textAlign="center"
        alignItems="center"
      >
        <MenuItems link="/">Home</MenuItems>
        <MenuItems link="/about">About</MenuItems>
        <MenuItems link="/services">Services</MenuItems>
        <MenuItems link="/gallery">Gallery</MenuItems>
        <MenuItems link="/blog">Blog</MenuItems>
        <MenuItems link="/contact">Contact</MenuItems>
        <Stack spacing={0} direction="row" align="center" marginLeft={20} >
          <NextLink href="/signup" passHref>
            <Button as="a" bg="yellow.400" _hover={{ bg: "yellow.500" }}>Create an account</Button>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button as="a" bg="transparent" color="yellow.400" _hover={{ bg: "gray.100" }}>
              sign in
            </Button>
          </NextLink>
        </Stack>
       
      </Box>
    </Flex>
  )
}

export default Nav
