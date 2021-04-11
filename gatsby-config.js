module.exports = {
  siteMetadata: {
    title: 'Rosemary Jovanovic - Canberra Psychologist',
    description: 'Caring Effective Psychological Services',
    url: 'https://rosemaryjovanovic.com.au/',
    author: 'Sam Ilic',
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-31115710-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'common',
        path: `${__dirname}/src/assets/`,
      },
      __key: "assets",
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
};
