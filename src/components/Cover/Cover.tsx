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
      my={8}
    >
      <Text textTransform="uppercase" fontSize="sm">
        Would love to invite you
      </Text>
      <Text textTransform="uppercase" fontSize="sm">
        to their civil ceremony
      </Text>
      <Text textTransform="uppercase" fontSize="sm">
        and wedding celebration
      </Text>
      <Text variant="bold" textTransform="uppercase" fontSize="sm" pt={2}>
        at Artbistro, Stalowa 52 in Warsaw
      </Text>
      <Text variant="bold" fontSize="lg">
        on 27th May 2023 at 17.00
      </Text>
    </Box>
  </FullPage>
)

export default Cover
