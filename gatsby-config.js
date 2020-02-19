require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Devon Anderson`,
    twitterHandle: '@dsawebdev',
    siteUrl: `https://www.reddragonweb.com`,
    description: `Portfolio site for Devon Anderson`,
    author: `Devon Anderson`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'services',
        link: '/services',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'projects',
        link: '/projects',
      },
      {
        name: 'contact',
        link: '/contact',
      },
      {
        name: 'blog',
        link: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //Todo will need to be updated
        trackingId: process.env.GOOGLE_TRACKING_ID
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Aleo'
          },
          {
            family: 'Raleway'
          },
          {
            family: 'Kaushan Script'
          }

        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: `master`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reddragonweb.com`,
        short_name: `Red Dragon Web`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/reddragon-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
