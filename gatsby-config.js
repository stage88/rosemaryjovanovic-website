module.exports = {
  siteMetadata: {
    title: 'Rosemary Jovanovic - Canberra Psychologist',
    name: 'Rosemary Jovanovic',
    description: 'Caring Effective Psychological Services',
    siteUrl: 'https://rosemaryjovanovic.com.au/',
    author: 'Sam Ilic',
    constactEmail: 'rosie@rosemaryjovanovic.com.au',
    authorUrl: 'https://github.com/stage88',
    sourceUrl: 'https://github.com/stage88/rosemaryjovanovic-website',
    siteImage: '/profile-photo-s.jpg',
    linkedInUrl: 'https://au.linkedin.com/in/rosemary-jovanovic-95a02367',
    twitterUrl: 'https://twitter.com/rosiejov',
    facebookUrl: 'https://www.facebook.com/rosemary.jovanovic',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-31115710-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'common',
        path: `${__dirname}/src/assets/`,
      },
      __key: 'assets',
    },
    'gatsby-plugin-sass'
  ],
};
