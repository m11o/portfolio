import React from 'react'

import { Box, Heading, Stack, Link, useColorModeValue, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type HeaderLinkProps = {
  href: string,
  children?: React.ReactNode
  target?: string
}
const HeaderLink: React.FC<HeaderLinkProps> = ({ href, target = '_self', children }) => <Link href={href} p={2} target={target}>{children}</Link>

const Header: React.FC = () => {
  return (
    <Box as='header' w='100%' bg={useColorModeValue('#ffffff40', 'gray.800')} >
      <Box as='nav' w='100%' px={{ base: 0, md: 8 }} h='auto'>
        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} justifyContent='end' alignItems='center' flexGrow={1}>
          <HeaderLink href='/'>TOP</HeaderLink>
          <HeaderLink href='/works'>Works</HeaderLink>
          <HeaderLink href='/posts'>Blog</HeaderLink>
          <HeaderLink href='/resume'>Resume</HeaderLink>
          <HeaderLink href='https://github.com/m11o' target='_blank'>Github</HeaderLink>
        </Stack>
        <Box justifyContent='flex-end' display={{ base: 'flex', md: 'none' }} w='100%'>
          <Menu isLazy>
            <MenuButton icon={<HamburgerIcon />} as={IconButton} variant='outline' />
            <MenuList>
              <MenuItem as={Link} href='/'>TOP</MenuItem>
              <MenuItem as={Link} href='/works'>Works</MenuItem>
              <MenuItem as={Link} href='/posts'>Blogs</MenuItem>
              <MenuItem as={Link} href='/resume'>Resume</MenuItem>
              <MenuItem as={Link} href='https://github.com/m11o' target='_blank'>Github</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box>
        <Heading as='h1' textAlign='center' mt={{ base: 20, md: 40 }} mb={20} fontFamily='header' fontWeight='bold'>Love Beautiful Code</Heading>
      </Box>
    </Box>
  )
}

export default Header
