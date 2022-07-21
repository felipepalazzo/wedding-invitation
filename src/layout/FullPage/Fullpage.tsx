import React from 'react'
import { Container, Center, Box } from '@chakra-ui/react'

const FullPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Center>
    <Container
      position="absolute"
      margin={0}
      top="50%"
      transform="translateY(-50%)"
    >
      {children}
    </Container>
  </Center>
)

export default FullPage
