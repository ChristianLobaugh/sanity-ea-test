export default {
  type: 'document',
  name: 'quiz',
  title: 'Quiz',
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'questions',
      of: [{ type: 'quizQuestions' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title: `Quiz: ${title}`
      }
    }
  }
}
