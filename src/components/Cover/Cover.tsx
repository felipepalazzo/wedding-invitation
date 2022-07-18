import React from 'react'
import { Box, Text, Divider } from '@chakra-ui/react'
import FullPage from '@/layout/FullPage'

const Cover: React.FC = () => (
  <FullPage>
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
  </FullPage>
)

export default Cover
