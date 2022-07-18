import React from 'react'
import { Box, Container, Text, Divider } from '@chakra-ui/react'

const Cover: React.FC = () => {
  return (
    <Container h="100vh">
      <Box>
        <Text fontFamily="playfair">Paulina</Text>
      </Box>
      <Box>
        <Text>Szymanska</Text>
      </Box>
      <Box>
        <Text>&amp;</Text>
      </Box>
      <Box>
        <Text>Felipe</Text>
      </Box>
      <Box>
        <Text>Palazzo</Text>
      </Box>
      <Divider />
      <Box>
        <Text>Would love to invite you to their wedding at 7pm</Text>
      </Box>
    </Container>
  )
}

export default Cover
