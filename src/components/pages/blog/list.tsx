import React, { useEffect, useState } from 'react'
import { Text, LinkBox, Heading, Flex, Box, Tag } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { EntryFields } from 'contentful'

import contentfulClient from '../../../lib/contentful_client'

type blogCardProps = {
  id: string,
  title: string,
  tags: string[],
  description?: string,
  updatedAt: string
}
const BlogCard: React.FC<blogCardProps> = ({ id, title, tags, description='', updatedAt }) => {
  const updatedAtDate = new Date(updatedAt)
  return (
    <LinkBox as='article' p={5} borderBottomWidth='1px' _hover={{
      borderWidth: '1px',
      rounded: 'md'
    }}>
      <Heading size='lg' as='h3' mb={3}>
        <Link to={`/posts/${id}`}>{title}</Link>
      </Heading>
      <Text fontSize='md' mb={2} noOfLines={[5, 3]}>{description}</Text>
      <Flex direction='row' justifyContent='space-between' alignItems='flex-end'>
        <Box>
          {tags.length ? tags.map((tag) => <Tag key={tag} mx={1} my={1}>{tag}</Tag>) : ''}
        </Box>
        <Text fontSize='sm' fontWeight='bold' px={4}>{updatedAtDate.toLocaleDateString('ja-JP')}</Text>
      </Flex>
    </LinkBox>
  )
}

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<EntryFields.Array<EntryFields.Object>>([])
  const [page] = useState(1)

  useEffect(() => {
    const f = async () => {
      const query = {
        content_type: 'blog',
        limit: 10,
        order: '-sys.createdAt',
        skip: page - 1
      }
      await contentfulClient.getEntries(query)
        .then(response => setPosts(response.items))
        .catch(err => console.error(err))
    }
    f()
  }, [])

  return (
    posts.length ? (
      <>
        {posts.map((post: EntryFields.Object) => {
          const { id, updatedAt } = post.sys
          const { title, description, tags } = post.fields

          return <BlogCard key={id} id={id} title={title} description={description} tags={tags} updatedAt={updatedAt} />
        })
      }
      </>
    ) : (
      <Text fontSize='sm' color='gray.400' textAlign='center'>現在、表示できる記事が存在しません</Text>
    )
  )
}
export default BlogList
