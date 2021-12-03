import React, { useEffect, useState } from 'react'
import { Text, Box, Flex, Image, LinkBox, LinkOverlay, Heading, Tag } from '@chakra-ui/react'

import PortfolioIcon from '../../assets/portfolio_icon1.jpg'
import contentfulClient from '../../lib/contentful_client'

const Work = () => {
  const [works, setWorks] = useState<any>([])
  const [thumbnailLinks, setThumbnailLinks] = useState<any>({})

  useEffect(() => {
    const f = async () => {
      const query = {
        content_type: 'work',
        order: '-sys.createdat'
      }
      await contentfulClient.getEntries(query)
        .then(response => {
          setWorks(response.items)
          if (!response.items.length) return

          const links: { [s: string]: string } = {}
          response.items.forEach(async (work: any) => {
            const { thumbnail } = work.fields
            console.log(thumbnail)
            if (!thumbnail) return

            const thumbnail_id: string = thumbnail.sys.id
            await contentfulClient.getAsset(thumbnail_id)
              .then(response => {
                setThumbnailLinks((prevLinks: any) => {
                  console.log(prevLinks)
                  console.log(response.fields)
                  prevLinks[thumbnail_id] = response.fields.file.url
                  return prevLinks
                })
              })
              .catch(err => console.error(err))
          })
        })
        .catch(err => console.error(err))
    }
  }, [])

  console.log(thumbnailLinks)

  return (
    works.length ? (
      works.map((work: any) => {
        const { name, thumbnail, libs, link, description } = work.fields
        if (thumbnail) {
          const thumbnailLink = thumbnailLinks[thumbnail.sys.id]
          console.log(thumbnailLink)
        }

        return (
          <Box key={name} w='100%'>
            <Heading as='h1' size='md' mb={8}>ポートフォリオ</Heading>
            <Flex direction='row' justifyContent='space-between'>
              <LinkBox as='article' borderWidth='3px' rounded='md' h='auto' maxH={{ base: '300px', md: '450px' }} w={{ base: '100%', md: '45%' }}>
                <Image borderBottomWidth='2px' src={thumbnail?.sys?.id ? (thumbnailLinks[thumbnail.sys.id]) : PortfolioIcon} borderTopRadius='md' h='50%' w='100%' fit='cover' />
                <Box p={4}>
                  <Heading as='h4' size='md' mb={2}>
                    <LinkOverlay href={link}>
                      {name}
                    </LinkOverlay>
                  </Heading>
                  <Text size='sm' noOfLines={{ base: 4, md: 3 }}>{description}</Text>
                  <Flex flexWrap='wrap' mt={4} alignItems='baseline'>
                    <Heading as='h6' size='sm' mr={1}>使用技術:</Heading>
                    {libs.length ? (
                      libs.map((lib: any) => <Tag colorScheme='green' size='sm' mr={1} mb={1} key={lib}>{lib}</Tag>)
                    ) : ''}
                  </Flex>
                </Box>
              </LinkBox>
            </Flex>
          </Box>
        )
      })
    ) : (
      <Text fontSize='sm' color='gray.400' textAlign='center'>現在、表示できるPortfolioがありません</Text>
    )
  )
}
export default Work
