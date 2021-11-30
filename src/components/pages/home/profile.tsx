import React from 'react'

import { Flex, Box, Heading, Text, Avatar } from '@chakra-ui/react'
import ProfileIcon from '../../../assets/portfolio_icon1.jpg'

const Profile = () => (
  <Flex justifyContent='space-between' alignItems='flex-start' flexDirection='row' px={5} py={2}>
    <Box>
      <Heading as='h2' size='lg' fontFamily='heading'>Masahito Osako</Heading>
      <Text>Backend Engineer / Frontend Engineer</Text>
    </Box>
    <Box>
      <Avatar size='2xl' showBorder src={ProfileIcon} />
    </Box>
  </Flex>
)
export default Profile
