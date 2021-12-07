import React, { useState, useEffect, forwardRef, useRef, useCallback } from 'react'

import ReactToPrint from 'react-to-print'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { Button, Center } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'

import * as ResumeMarkdownPath from '../../assets/resume.md'
import markdownTheme from '../../lib/markdown_theme'

const ResumeContent = forwardRef<HTMLDivElement>((_, ref) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    const f = async () => {
      await fetch(ResumeMarkdownPath.default)
        .then(response => response.text())
        .then(text => setMarkdown(text))
    }
    f()
  })

  return (
    <div ref={ref} style={{ marginBottom: '50px' }}>
      <ReactMarkdown components={ChakraUIRenderer(markdownTheme)} remarkPlugins={[gfm]} skipHtml>
        {markdown}
      </ReactMarkdown>
    </div>
  )
})
ResumeContent.displayName = 'ResumeContent'

const Resume: React.FC = () => {
  const resumeRef = useRef<HTMLDivElement>(null)

  const printContent = useCallback(() => resumeRef.current, [resumeRef.current])
  const printTrigger = useCallback(() => <Center><Button rightIcon={<DownloadIcon />}>Download</Button></Center>, [])

  return (
    <>
      <ResumeContent ref={resumeRef} />
      <ReactToPrint
        content={printContent}
        documentTitle='resume'
        trigger={printTrigger}
        copyStyles
        bodyClass='resume-pdf-content'
      />
    </>
  )
}
export default Resume
