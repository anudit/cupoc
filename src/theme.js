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
      heading: "'Comfortaa', sans-serif",
      body: "'Comfortaa', sans-serif",
    },
    config: {
      cssVarPrefix: "c",
      initialColorMode: 'light',
      useSystemColorMode: false,
    }
});

export default theme
