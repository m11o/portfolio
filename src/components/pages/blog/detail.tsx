import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heading, Flex, Tag, Text, Box, Code } from '@chakra-ui/react'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { Entry, EntryFields } from 'contentful'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import contentfulClient from '../../../lib/contentful_client'
import markdownTheme from '../../../lib/markdown_theme'

type postType = {
  title: string,
  tags: string[],
  markdown: string,
  updatedAt: string
}

const BlogDetail: React.FC = () => {
  const { id } = useParams()
  const [post, setPost] = useState<postType>({ title: '', tags: [], markdown: '', updatedAt: '' })

  useEffect(() => {
    contentfulClient.getEntry(id || '')
      .then((response: Entry<EntryFields.Object>): void => {
        const { title, tags, markdown } = response.fields
        const updatedAt = new Date(response.sys.updatedAt).toLocaleDateString('ja-JP')

        setPost({ title, tags, markdown, updatedAt })
      })
      .catch(err => console.error(err))
  }, [])

  const customMarkdownTheme = {
    ...markdownTheme,
    code: (props: any) => {    // eslint-disable-line @typescript-eslint/no-explicit-any
      const { inline, children, className } = props
      if (inline) return <Code p={2}>{children}</Code>

      const languageMatch = className.match(/language-(\w+)/)
      let language = ''
      if (languageMatch) {
        language = languageMatch[1]
      }
      return (
        <SyntaxHighlighter
          style={atomOneDark}
          customStyle={{ margin: '18px 0' }}
          language={language}
          codeTagProps={{ style: {
            padding: '10px',
            margin: '15px 0',
            display: 'block',
            backgroundColor: 'gray.600',
            borderRadius: '3px',
            overflowX: 'auto'
          } }}
          PreTag={React.Fragment}
          CodeTag={Code}
        >
          {children}
        </SyntaxHighlighter>
      )
    }
  }

  return (
    <>
      <Box mb={{ base: 10, md: 20 }}>
        <Heading as='h1' size='xl' mb={{ base: 2, md: 4 }}>{post.title}</Heading>
        <Flex justifyContent='space-between' alignItems='flex-end'>
          <Box>
            {post.tags.length ? (post.tags.map((tag) => <Tag key={tag} mx={1} my={1}>{tag}</Tag>)) : ''}
          </Box>
          <Text fontWeight='bold'>{post.updatedAt}</Text>
        </Flex>
      </Box>
      <ReactMarkdown components={ChakraUIRenderer(customMarkdownTheme)} remarkPlugins={[gfm]}>{post.markdown}</ReactMarkdown>
    </>
  )
}
export default BlogDetail
