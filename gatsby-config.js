module.exports = {
  siteMetadata: {
    title: `FNE 25-90 - France Nature Environnement Doubs et Territoire de Belfort`,
    description: `FNE 25-90 fédération des associations de protection de la Nature et de l'environnement Doubs - Territoire de Belfort`,
    author: `@FNEasso`,
    lang: `fr`,
    siteUrl: `https://www.fne2590.org`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        short_name: `FNE2590`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c90c0f`,
        display: `minimal-ui`,
        icon: `src/images/herisson.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: false,             // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        //develop: true, // Activates purging in npm run develop
        printRejected: true,
        whitelist: ['has-text-weight-bold'],
      },
    }, // must be after other CSS plugins
  ],
}
