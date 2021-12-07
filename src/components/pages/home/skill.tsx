import React from 'react'

import { Flex, Text, Box, Progress } from '@chakra-ui/react'
import { PanelContainer } from './common'

type skillContentProps = {
  name: string,
  value: number
}
const SkillContent: React.FC<skillContentProps> = ({ name, value }) => (
  <Flex w='100%' alignItems='center' mb={4}>
    <Text mr={{ base: 2, md: 5 }} fontWeight='bold' w={{ base: '170px', md: 40 }} fontSize={{ base: 'sm', md: 'md' }}>{name}</Text>
    <Box w='100%' mr={2}>
      <Progress value={value} max={100} min={0} hasStripe colorScheme='gray' />
    </Box>
    <Text fontWeight='bold' fontSize={{ base: 'sm', md: 'md' }}>{`${value}%`}</Text>
  </Flex>
)
const skills: { [s: string]: number } = {
  'Ruby': 95,
  'Ruby on Rails': 95,
  'javascript': 90,
  'typescript': 90,
  'HTML5/CSS3': 90,
  'React.js': 80,
  'SCSS': 80,
  'Python3': 80,
  'Docker': 65,
}
const Skill: React.FC = () => (
  <PanelContainer title='Skills'>
    <Flex w='100%' flexDirection='column' alignItems='flex-start'>
      {Object.keys(skills).map(key => <SkillContent name={key} value={skills[key]} key={key} />)}
    </Flex>
  </PanelContainer>
)
export default Skill
