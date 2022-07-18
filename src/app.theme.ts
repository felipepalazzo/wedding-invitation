import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    playfair: 'Playfair Display',
  },
  components: {
    Text: {
      variants: {
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
  },
})
