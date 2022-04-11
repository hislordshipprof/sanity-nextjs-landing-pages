export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '625449bf4d3ac20073762c2d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4zps4v2e',
                  apiId: 'e8ff148f-f906-4e58-8a66-1fa7509bed18'
                },
                {
                  buildHookId: '625449c0648488035f28af5f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3e1brbcx',
                  apiId: '67c1ad9a-32ac-4f7d-906e-3b8956a95b27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hislordshipprof/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3e1brbcx.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
