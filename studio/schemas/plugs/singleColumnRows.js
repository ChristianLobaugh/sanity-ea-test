export default {
  type: 'object',
  name: 'singleColumnRows',
  title: 'Single Column rows',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'rows',
      of: [{ type: 'textWithIllustration' }]
    }
  ]
}
