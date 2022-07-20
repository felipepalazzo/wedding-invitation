import React, { useEffect, useState } from 'react'
import { Container, Center, Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
  onKeyPadShow?: () => void
  onKeyPadHide?: () => void
}

const FullPage: React.FC<Props> = ({
  children,
  onKeyPadShow,
  onKeyPadHide,
}) => {
  const [height, setHeight] = useState('auto')

  useEffect(() => {
    const isAndroid =
      window.navigator.userAgent.toLowerCase().indexOf('android') > -1

    const originalH = window.innerHeight

    const listener = () => {
      if (isAndroid) {
        if (window.innerHeight < originalH) {
          setHeight(`${window.innerHeight}px`)
          if (onKeyPadShow) {
            onKeyPadShow()
          }
        } else {
          setHeight('auto')
          if (onKeyPadHide) {
            onKeyPadHide()
          }
        }
      }
    }

    window.visualViewport.addEventListener('resize', listener)

    return () => {
      window.visualViewport.removeEventListener('resize', listener)
    }
  }, [onKeyPadShow, onKeyPadHide])

  return (
    <Center
      // borderBottomWidth={1}
      // borderTopWidth={1}
      // borderColor="red"
      bg="white"
      w="full"
      h="full"
    >
      <Container
        position="absolute"
        margin={0}
        top="50%"
        transform="translateY(-50%)"
      >
        <Box h={height} bg="white">
          {children}
        </Box>
      </Container>
    </Center>
  )
}

export default FullPage
