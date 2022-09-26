module.exports = {
  siteMetadata: {
    title: `Victoria Rhinebolt`,
    description: `My portfolio site.`,
    author: `Victoria Rhinebolt`,
    siteUrl: `https://www.victoriarhinbolt.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
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
        background_color: `#010E1B`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    
  ],
}
