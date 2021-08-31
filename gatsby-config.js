require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kevin Huang`,
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name: 'Projects',
        link:'/project/'
      },
      {
        name: 'Coursework',
        link:'/coursework/'
      },
      {
        name: 'Contact',
        link:'/contact/'
      }
    ],
    description: `Home page of Kevin Huang.`,
    author: `Kevin Huang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Kevin_Yellowstone.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
