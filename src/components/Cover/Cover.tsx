import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import FullPage from '@/layout/FullPage'

const Font = ({ children }: { children: string }) => (
  <Text fontFamily="playfair" fontSize="6xl" variant="bold" lineHeight={1}>
    {children}
  </Text>
)

const Cover: React.FC = () => (
  <FullPage>
    <Box>
      <Font>Paulina</Font>
    </Box>
    <Box>
      <Font>Szymanska</Font>
    </Box>
    <Box>
      <Text fontFamily="playfair" fontSize="5xl" variant="bold">
        &amp;
      </Text>
    </Box>
    <Box>
      <Font>Felipe</Font>
    </Box>
    <Box>
      <Font>Palazzo</Font>
    </Box>
    <Box
      borderColor="black"
      borderTopWidth={1}
      borderBottomWidth={1}
      py={4}
      my={6}
    >
      <Text>Would love to invite you</Text>
      <Text>to their wedding at 7pm</Text>
      <Text>27 . 05 . 2023</Text>
    </Box>
  </FullPage>
)

export default Cover
