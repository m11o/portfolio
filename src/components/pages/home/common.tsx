import React from 'react'

import { Flex, Heading } from '@chakra-ui/react'

type panelContainerProps = {
  children: React.ReactNode,
  title: string,
  icon?: React.ReactNode
}

const PanelContainer: React.FC<panelContainerProps> = ({ title, children, icon = null }) => (
  <Flex flexDirection='column' alignItems='flex-start' mt={5} px={5} py={2}>
    <Heading size='md' as='h4' borderBottomWidth='3px' borderBottomColor='#ddd' mb={4}>
      {title}
      {icon ? icon : ''}
    </Heading>

    {children}
  </Flex>
)
export {
  PanelContainer
}
