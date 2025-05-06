import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/core'

const Button: React.FC = ({ children }) => {
  return (
    <ChakraButton
      bg="orange.500" 
      color="white"
      textTransform="uppercase"
      width="fit-content"
      _hover={{ bg: "orange.600" }}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
