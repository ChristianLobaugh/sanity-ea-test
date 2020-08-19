export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3da92442e4c87b1ed04850',
                  title: 'Sanity Studio',
                  name: 'sanity-ea-test-studio',
                  apiId: 'ff569ae1-4087-4342-9b23-877493de0d4f'
                },
                {
                  buildHookId: '5f3da92488092b755b6177bb',
                  title: 'Blog Website',
                  name: 'sanity-ea-test',
                  apiId: 'cb25830c-89d3-4d14-a2c8-f6d4a57ddd31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianLobaugh/sanity-ea-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-ea-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
