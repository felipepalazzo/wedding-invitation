import React from 'react'
import { Flex, Container } from '@chakra-ui/react'

const FullPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Flex minH="100vh">
    <Container flex={1} display="flex" flexDir="column" justifyContent="center">
      {children}
    </Container>
  </Flex>
)

export default FullPage
