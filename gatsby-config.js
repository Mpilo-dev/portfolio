/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Mpilo Ndlovu - Official Portfolio site`,
    description: `Mpilo Ndlovu is a software developer and licensed football coach with a Caf D license. Explore my portfolio showcasing innovative technology solutions.`,
    author: `Mpilo Ndlovu`,
    siteUrl: `https://mpilo-ndlovu.site`,
    icon: `/src/images/app-logo.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/app-logo.png`,
      },
    },
  ],
};
