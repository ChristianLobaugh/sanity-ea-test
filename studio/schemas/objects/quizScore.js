export default {
  title: 'Quiz Score',
  name: 'quizScore',
  type: 'object',
  fieldsets: [
    {
      name: 'scoring',
      title: 'Scoring',
      options: {
        // collapsible: true, // Makes the whole fieldset collapsible
        // collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 1 // Defines a grid for the fields and how many columns it should have
      }
    }
  ],
  fields: [
    {
      title: 'EA Type',
      name: 'eaType',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Creator', value: 'Creator' },
          { title: 'Teacher', value: 'Teacher' },
          { title: 'Entrepreneur', value: 'Entrepreneur' },
          { title: 'Coach', value: 'Coach' }
        ]
      }
    },
    {
      title: 'Strongly Agree',
      name: 'stronglyAgreeScore',
      type: 'number',
      fieldset: 'scoring'
    },
    {
      title: 'Agree',
      name: 'agreeScore',
      type: 'number',
      fieldset: 'scoring'
    },
    {
      title: 'Neutral',
      name: 'neutralScore',
      type: 'number',
      fieldset: 'scoring'
    },
    {
      title: 'Disagree',
      name: 'disagreeScore',
      type: 'number',
      fieldset: 'scoring'
    },
    {
      title: 'Strongly Disagree',
      name: 'stronglyDisagreeScore',
      type: 'number',
      fieldset: 'scoring'
    }
  ],
  preview: {
    select: {
      eaType: 'eaType',
      stronglyAgreeScore: 'stronglyAgreeScore',
      agreeScore: 'agreeScore',
      neutralScore: 'neutralScore',
      disagreeScore: 'disagreeScore',
      stronglyDisagreeScore: 'stronglyDisagreeScore'
    },
    prepare({
      eaType,
      stronglyAgreeScore,
      agreeScore,
      neutralScore,
      disagreeScore,
      stronglyDisagreeScore
    }) {
      return {
        title: `${stronglyAgreeScore || '0'} / ${agreeScore || '0'} / ${neutralScore ||
          '0'} / ${disagreeScore || '0'} / ${stronglyDisagreeScore || '0'}`,
        subtitle: `${eaType}`
      }
    }
  }
}
