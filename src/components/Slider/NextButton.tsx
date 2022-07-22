import React from 'react'
import { Button, Center } from '@chakra-ui/react'
import { useSwiper } from 'swiper/react'

export default function NextButton() {
  const swiper = useSwiper()
  return (
    <Center position="absolute" bottom={0} w="full" zIndex={9}>
      <Button onClick={() => swiper.slideNext()}>Next</Button>
    </Center>
  )
}
