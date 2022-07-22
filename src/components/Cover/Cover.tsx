import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Font = ({ children }: { children: string }) => (
  <Text fontFamily="playfair" fontSize="6xl" variant="bold" lineHeight={1}>
    {children}
  </Text>
)

const Cover: React.FC = () => (
  <Box transform="translateY(-21px)">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
    <Box mt={8}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
        style={{
          height: '1px',
          background: 'black',
        }}
      />
    </Box>
    <Box py={4}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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
      </motion.div>
    </Box>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.8 }}
      style={{
        height: '1px',
        background: 'black',
      }}
    />
  </Box>
)

export default Cover
