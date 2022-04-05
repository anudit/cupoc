import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import 'react-notion-x/src/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
