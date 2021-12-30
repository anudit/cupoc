import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../src/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='application-name' content='Cupoc, Inc.' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Cupoc, Inc.' />
          <meta name='description' content='Driven by Curiosity, Possibility & Creativity to re-invent the internet, one Block at a time.' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content="#fff" />
          <link rel='icon' type='image/svg' sizes='512x512' href='/icons/icon.svg' />
          <link rel='shortcut icon' href='/icons/icon.svg' />
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/icon.svg' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/icons/icon.svg' color='#5bbad5' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:url' content='https://cupoc.space' />
          <meta name='twitter:title' content='Cupoc, Inc.' />
          <meta name='twitter:description' content='Driven by Curiosity, Possibility & Creativity to re-invent the internet, one Block at a time.' />
          <meta name='twitter:creator' content='@0xConvo' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Cupoc, Inc.' />
          <meta property='og:description' content='Driven by Curiosity, Possibility & Creativity to re-invent the internet, one Block at a time.' />
          <meta property='og:site_name' content='Cupoc, Inc.' />
          <meta property='og:url' content='https://cupoc.space' />
          <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `{"@context": "http://www.schema.org","@type": "Corporation","name": "Cupoc, Inc.","url": "https://cupoc.space","logo": "https://cupoc.space/images/logo.png","image": "https://cupoc.space/images/poster.webp","description": "The Decentralized Conversation Layer of Internet."}`}} />
          <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `{"@context": "https://schema.org","@type": "Organization","url": "https://cupoc.space","logo": "https://cupoc.space/images/logo.png"}`}} />
          <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `{"@context": "https://schema.org","@type": "WebSite","url": "https://cupoc.space","potentialAction": {"@type": "SearchAction","target": "https://cupoc.space/explore?search={searchTerms}","query-input": "required name=searchTerms"}}`}} />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
