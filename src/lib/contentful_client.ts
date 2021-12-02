import * as contentful from 'contentful'

// TODO: add environments
const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE || '',
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY || ''
})
export default contentfulClient
