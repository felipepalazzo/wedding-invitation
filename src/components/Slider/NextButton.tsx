import React from 'react'
import { motion } from 'framer-motion'
import { Box, Center } from '@chakra-ui/react'
import { useSwiper } from 'swiper/react'
import ArrowDown from '../ArrowDown'

export default function NextButton() {
  const swiper = useSwiper()
  return (
    <Center position="absolute" bottom={0} w="full" zIndex={9}>
      <Box as="button" onClick={() => swiper.slideNext()} h="42px" w="42px">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{
            delay: 1.8,
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown />
        </motion.div>
      </Box>
    </Center>
  )
}
