import React, { useState, useEffect } from 'react'

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

import * as ResumeMarkdownPath from '../../assets/resume.md'
import markdownTheme from './resume/markdown_theme'

const Resume = () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    const f = () => {
      fetch(ResumeMarkdownPath.default)
        .then(response => response.text())
        .then(text => setMarkdown(text))
    }
    f()
  })

  return (
    <ReactMarkdown components={ChakraUIRenderer(markdownTheme)} remarkPlugins={[gfm]} skipHtml >
      {markdown}
    </ReactMarkdown>
  )
}
export default Resume
