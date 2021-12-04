import React, { useEffect, useState } from 'react'
import { Text, Box, Flex, Image, LinkBox, LinkOverlay, Heading, Tag } from '@chakra-ui/react'
import { EntryFields, Asset, Entry } from 'contentful'

import PortfolioIcon from '../../assets/portfolio_icon1.jpg'
import contentfulClient from '../../lib/contentful_client'

const Work: React.FC = () => {
  const [works, setWorks] = useState<EntryFields.Array<EntryFields.Object>>([])
  const [thumbnailLinks, setThumbnailLinks] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const f = () => {
      const query = {
        content_type: 'work',
        order: '-sys.createdAt'
      }
      contentfulClient.getEntries(query)
        .then((response: EntryFields.Object) => {
          setWorks(response.items)
          if (!response.items.length) return

          response.items.forEach((work: Entry<EntryFields.Object>) => {
            const { thumbnail } = work.fields
            if (!thumbnail) return

            const thumbnail_id: string = thumbnail.sys.id
            contentfulClient.getAsset(thumbnail_id)
              .then((response: Asset) => {
                setThumbnailLinks((prevLinks: { [key: string]: string }) => {
                  prevLinks[thumbnail_id] = response.fields.file.url
                  return prevLinks
                })
              })
              .catch(err => console.error(err))
          })
        })
        .catch(err => console.error(err))
    }
    f()
  }, [])

  return (
    works.length ? (
      <>
        {works.map((work: EntryFields.Object) => {
          const { name, thumbnail, libs, link, description } = work.fields

          return (
            <Box key={name} w='100%'>
              <Heading as='h1' size='md' mb={8}>ポートフォリオ</Heading>
              <Flex direction='row' justifycontent='space-between'>
                <LinkBox as='article' borderWidth='3px' rounded='md' h='auto' maxH={{ base: '300px', md: '450px' }} w={{ base: '100%', md: '45%' }}>
                  <Image borderbottomwidth='2px' src={thumbnail && thumbnail.sys.id ? (thumbnailLinks[thumbnail.sys.id]) : PortfolioIcon} bordertopradius='md' h='50%' w='100%' fit='cover' />
                  <Box p={4}>
                    <Heading as='h4' size='md' mb={2}>
                      <LinkOverlay href={link}>
                        {name}
                      </LinkOverlay>
                    </Heading>
                    <Text size='sm' nooflines={{ base: 4, md: 3 }}>{description}</Text>
                    <Flex flexwrap='wrap' mt={4} alignitems='baseline'>
                      <Heading as='h6' size='sm' mr={1}>使用技術:</Heading>
                      {libs.length ? (
                        libs.map((lib: string) => <Tag colorscheme='green' size='sm' mr={1} mb={1} key={lib}>{lib}</Tag>)
                      ) : ''}
                    </Flex>
                  </Box>
                </LinkBox>
              </Flex>
            </Box>
          )
        })}
      </>
    ) : (
      <Text fontSize='sm' color='gray.400' textAlign='center'>現在、表示できるPortfolioがありません</Text>
    )
  )
}
export default Work
