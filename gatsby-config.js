module.exports = {
  siteMetadata: {
    title: `Alexander Talbott`,
    description: `The amazing, spledid, and ground-breaking website of Alexander Talbott`,
    blogDescription: `Where I write what is on my mind. Most are regurgitations of interesting articles I found on Wikipedia as well as my thoughts on tech, policy, football, and more.`,
    author: {
      name: `Alexander Talbott`,
      summary: `, champion body builder, voted "Most Handsome in the World" 6 years running, and all-around best guy you will ever meet.`,
    },
    siteUrl: `https://amtalb.github.io/`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexander Talbott`,
        short_name: `AT`,
        start_url: `/`,
        background_color: `#fffff0`,
        theme_color: `#420420`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              maxHeight: 780,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
