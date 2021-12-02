import React from 'react'
import { Heading } from "@chakra-ui/react";

type headingThemeProps = {
  level: number,
  children?: React.ReactNode
}
const headingTheme: React.FC<headingThemeProps> = (props, as) => {
  const { level, children } = props
  const sizes = ['xl', 'lg', 'md', 'sm', 'xs', 'xs']
  const marginTop = as == 'h1' || as == 'h2' ? 10 : 4
  return (
    <Heading
      mb={2}
      mt={marginTop}
      size={sizes[level-1]}
      as={as}
    >
      {children}
    </Heading>
  )
}

const markdownTheme = {
  h1: (props: any) => headingTheme(props, 'h1'),
  h2: (props: any) => headingTheme(props, 'h2'),
  h3: (props: any) => headingTheme(props, 'h3'),
  h4: (props: any) => headingTheme(props, 'h4'),
  h5: (props: any) => headingTheme(props, 'h5'),
  h6: (props: any) => headingTheme(props, 'h6'),
}
export default markdownTheme
