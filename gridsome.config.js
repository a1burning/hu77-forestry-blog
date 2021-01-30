// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'hu77Blog',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ['projectpost','journalpost'],
        singleTypes: ['forstry']
      }
    }
  ],
  templates: {
    // 集合的名字，这个是怎么来的?
    // 是插件中的typeName+contentTypes的name
    StrapiProjectpost: [
      {
        path: '/projectposts/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournalpost: [
      {
        path: '/journalposts/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
