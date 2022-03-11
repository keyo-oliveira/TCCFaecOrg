module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "FrontEndOrgaoPublico",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./mocks/`,
      },
    },
    "gatsby-plugin-sass",
    `gatsby-transformer-json`,
  ],
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
