import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
      global: (props) => ({
        "html, body": {
          background: 'gray.100'
        },
      }),
    },
    fonts: {
      heading: "'Work Sans', sans-serif",
      body: "'Work Sans', sans-serif",
    },
    config: {
      cssVarPrefix: "c",
      initialColorMode: 'light',
      useSystemColorMode: false,
    }
});

export default theme
