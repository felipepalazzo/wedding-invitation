import React from 'react'
import Cover from '@/components/Cover'
import Slider from '@/components/Slider'
import { Box, Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Slider>
      <Cover />
      <Box h="full" bg="lightsalmon">
        booya
      </Box>
    </Slider>
  )
}
