module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Bitesized projects to get your skills sharp over a weekend.',
    permalink: 'https://weekendprojects.io',
    toc: [
      '/get-started/',
      '/simple-component/',
      '/composite-component/',
      '/data/',
      '/screen/',
      '/test/',
      '/deploy/',
      '/conclusion/',
      '/contribute/',
    ],
    siteUrl: 'https://weekendprojects.io',
    githubUrl: 'https://github.com/nnennajohn/weekend-projects',
    codeGithubUrl: 'https://github.com/hichroma/learnstorybook-code',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: 'uYykLgUbmn9azOcj4nE5BQg91ItB0rxI',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
