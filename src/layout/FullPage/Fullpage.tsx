import React from 'react'
import { Flex, Container } from '@chakra-ui/react'

const FullPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Flex flexDir="column" minH="100vh">
    <Container flex={1}>{children}</Container>
  </Flex>
)

export default FullPage
