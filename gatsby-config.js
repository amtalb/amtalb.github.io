module.exports = {
  siteMetadata: {
    title: `Alexander Talbott`,
    description: `The amazing, spledid, and ground-breaking website of Alexander Talbott`,
    siteUrl: `https://amtalb.github.io/`,
    author: {
      name: `Alexander Talbott`,
    },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
  ],
}