import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'krrobz00', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2022-11-06',
  useCdn: false // `false` if you want to ensure fresh data
})