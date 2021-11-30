import React from 'react'

import { Box, Heading, Stack, Link, useColorModeValue } from '@chakra-ui/react'

type HeaderLinkProps = {
  href: string,
  children?: React.ReactNode
  target?: string
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, target = '_self', children }) => <Link href={href} p={2} target={target}>{children}</Link>

const Header = () => {
  return (
    <Box as='header' w='100%' bg={useColorModeValue('#ffffff40', 'gray.800')} >
      <Box as='nav' w='100%' px='32px' h='auto'>
        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} justifyContent='end' alignItems='center' flexGrow={1}>
          <HeaderLink href='/'>TOP</HeaderLink>
          <HeaderLink href='/works'>Works</HeaderLink>
          <HeaderLink href='/posts'>Blog</HeaderLink>
          <HeaderLink href='/posts'>Resume</HeaderLink>
          <HeaderLink href='https://github.com/m11o' target='_blank'>Github</HeaderLink>
        </Stack>
      </Box>
      <Box>
        <Heading as='h1' textAlign='center' mt='35px' fontFamily='header' fontWeight='bold'>Love Beautiful Code</Heading>
      </Box>
    </Box>
  )
}

export default Header
