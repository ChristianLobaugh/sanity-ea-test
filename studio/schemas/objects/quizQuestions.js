export default {
  title: 'Quiz Questions',
  name: 'quizQuestions',
  type: 'object',
  fields: [
    // {
    //   title: 'Title',
    //   name: 'title',
    //   type: 'string'
    // },
    {
      title: 'Question',
      name: 'question',
      type: 'string',
      description: 'Enter the quiz question'
    },
    {
      name: 'Scoring',
      type: 'array',
      title: 'Question Scoring',
      description: 'Enter scores for one or EA types',
      of: [{ type: 'quizScore' }]
    }
  ]
}
