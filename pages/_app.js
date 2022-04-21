import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import 'react-notion-x/src/styles.css'
import { Global, css } from '@emotion/react';
const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
