import React from 'react'

import { Box } from '@chakra-ui/react'

import Profile from './home/profile'
import Work from './home/work'
import Bio from './home/bio'
import Skill from './home/skill'
import Love from './home/love'

const Home: React.FC = () => {
  return (
    <Box>
      <Profile />
      <Work />
      <Bio />
      <Skill />
      <Love />
    </Box>
  )
}

export default Home
