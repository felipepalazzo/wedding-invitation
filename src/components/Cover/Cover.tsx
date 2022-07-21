import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Font = ({ children }: { children: string }) => (
  <Text fontFamily="playfair" fontSize="6xl" variant="bold" lineHeight={1}>
    {children}
  </Text>
)

const Cover: React.FC = () => (
  <>
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
      mt={8}
    >
      <Text textTransform="uppercase" fontSize="sm">
        Would love to invite you
      </Text>
      <Text textTransform="uppercase" fontSize="sm">
        to their wedding celebration
      </Text>
      <Text variant="bold" fontSize="lg" textTransform="uppercase" py={2}>
        Saturday, 27 May 2023
      </Text>
      <Text textTransform="uppercase" fontSize="sm">
        at 5:00 in the afternoon
      </Text>
      <Text textTransform="uppercase" fontSize="sm">
        Artbistro, Stalowa 52 in Warsaw
      </Text>
    </Box>
  </>
)

export default Cover
