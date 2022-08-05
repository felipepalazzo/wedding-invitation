import React from 'react'
import { Box, Text, Link, Center } from '@chakra-ui/react'
import { FaEnvelope, FaPlus, FaWineGlass } from 'react-icons/fa'
import config from '../../config'

const Details = () => (
  <>
    <Text
      fontFamily="playfair"
      fontSize="6xl"
      variant="bold"
      lineHeight={1}
      pb={8}
    >
      Details
    </Text>
    <Box pb={4} borderBottomWidth={1} borderColor="black">
      <Text textTransform="uppercase" fontSize="sm">
        The civil ceremony will be followed by the wedding celebration at the
        same location{' '}
        <Link
          href="https://goo.gl/maps/wR7y7GpFccettLur9"
          isExternal
          textDecoration="underline"
        >
          (See map)
        </Link>
      </Text>
    </Box>
    <Box pt={4} pb={6}>
      <Text fontSize="sm" variant="semiBold" pb={2}>
        Gifts
      </Text>
      <Text fontSize="sm">
        For those who would like to buy us a gift, local tradition suggests
        money in a card and wine
      </Text>
      <Center w="60px" margin="auto" justifyContent="space-between" pt={6}>
        <FaWineGlass />
        <FaPlus />
        <FaEnvelope />
      </Center>
    </Box>
    <Box pb={6}>
      <Text fontSize="sm" variant="semiBold" pb={2}>
        Poprawiny (do-over)
      </Text>
      <Text fontSize="sm">
        In a true Polish style, we would like to invite you to continue the
        celebrations with us the following day,{' '}
        <Text as="span" variant="medium">
          28 th May,
        </Text>{' '}
        at the bride&apos;s parents&apos; house for a BBQ at 1pm in{' '}
        <Text as="span" variant="medium">
          Kochanowskiego 9c, Milanowek
        </Text>
      </Text>
    </Box>
    <Box>
      <Text fontSize="sm" variant="semiBold" pb={2}>
        Contact
      </Text>
      <Text fontSize="sm">
        For more information on our wedding please call: Paulina:{' '}
        <Text as="span" variant="medium">
          +44 {config.PHONE_2}
        </Text>{' '}
        or Felipe:{' '}
        <Text as="span" variant="medium">
          +44 {config.PHONE_1}
        </Text>
      </Text>
    </Box>
  </>
)

export default Details
