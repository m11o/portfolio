import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

type Props = {
  children?: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Masahito Osako's homepage" />
        <meta name="author" content="Masahito Osako" />
        <meta name="author" content="masahito1997" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Masahito Osako's Homepage" />
        <meta property="og:type" content="website" />
        <title>Masahito Osako - Homepage</title>
      </Helmet>

      <Box as='main' pb={8}>
        <Container maxW='container.md' pt={14}>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Main
