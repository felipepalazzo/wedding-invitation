import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Montserrat', sans-serif",
      },
    },
  },
  fonts: {
    playfair: "'Playfair Display', serif",
  },
  components: {
    Text: {
      variants: {
        extraLight: {
          fontWeight: 200,
        },
        light: {
          fontWeight: 300,
        },
        regular: {
          fontWeight: 400,
        },
        medium: {
          fontWeight: 500,
        },
        semiBold: {
          fontWeight: 600,
        },
        bold: {
          fontWeight: 700,
        },
      },
    },
    Alert: {
      variants: {
        success: {
          container: {
            bg: 'blue.300',
          },
        },
      },
    },
  },
})
