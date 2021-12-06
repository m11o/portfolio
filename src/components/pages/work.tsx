import React, { ReactElement } from 'react'
import { Text, Box, Flex, Image, LinkBox, LinkOverlay, Heading, Tag } from '@chakra-ui/react'
import { EntryFields, Asset, Entry } from 'contentful'

import PortfolioIcon from '../../assets/portfolio_icon1.jpg'
import contentfulClient from '../../lib/contentful_client'

type WorkProps = {
}
type WorkState = {
  works: EntryFields.Array<EntryFields.Object>
  thumbnailLinks: { [key: string]: string }
}
export default class Work extends React.Component<WorkProps, WorkState> {
  state: WorkState = {
    works: [],
    thumbnailLinks: {}
  }

  componentDidMount(): void {
    const query = {
      content_type: 'work',
      order: '-sys.createdAt'
    }

    contentfulClient
      .getEntries(query)
      .then((response: EntryFields.Object): Promise<string[]> => {
        this.setState({ works: response.items })

        return new Promise((resolve, reject) => {
          if (response.items.length) {
            resolve(
              response.items.map((work: Entry<EntryFields.Object>) => {
                const { thumbnail } = work.fields
                if (!thumbnail) return

                return thumbnail.sys.id
              })
            )
          } else {
            reject(Error('error: without items.'))
          }
        })
      })
      .then((thumbnailIds: string[]): Promise<Promise<Asset>[]> => {
        const thumbnails = thumbnailIds.map((thumnailId: string) => contentfulClient.getAsset(thumnailId))
        return new Promise(resolve => resolve(thumbnails))
      })
      .then((thumbnails: Promise<Asset>[]) => {
        Promise.all(thumbnails).then((assets: Asset[]) => {
          assets.forEach((asset: Asset) => {
            this.setState((prevState) => {
              prevState.thumbnailLinks[asset.sys.id] = asset.fields.file.url
              return prevState
            })
          })
        })
        .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  render(): ReactElement {
    return (
      this.state.works.length || this.state.thumbnailLinks.length ? (
        <>
          {this.state.works.map((work: EntryFields.Object) => {
            const { name, thumbnail, libs, link, description } = work.fields

            return (
              <Box key={name} w='100%'>
                <Heading as='h1' size='md' mb={8}>ポートフォリオ</Heading>
                <Flex direction='row' justifycontent='space-between'>
                  <LinkBox as='article' borderWidth='3px' rounded='md' h='auto' maxH={{ base: '300px', md: '450px' }} w={{ base: '100%', md: '45%' }}>
                    <Image borderbottomwidth='2px' src={thumbnail && thumbnail.sys.id ? (this.state.thumbnailLinks[thumbnail.sys.id]) : PortfolioIcon} bordertopradius='md' h='50%' w='100%' fit='cover' />
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
}
