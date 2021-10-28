const manifestConfig = require(`./manifest-config`)
require(`dotenv`).config()

const { 
  CONTENTFUL_ACCESS_TOKEN, 
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_HOST
} = process.env

const plugins = [
  `gatsby-plugin-preact`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      postCssPlugins: [
        require(`tailwindcss`),
        require(`./tailwind.config.js`),
        require(`autoprefixer`)
      ]
    },
  },
  { 
    resolve: `gatsby-plugin-purgecss`,
    options: {
      develop: true,
      printRejected: true,
      tailwind: true,
      ignore: [`/components/live-radio/`, `/components/live-ticker/`],
      purgeOnly : [`/components/`, `/styles/index.scss`]
    }
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-yaml`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/data/yaml`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: `${__dirname}/src/images/`,
      }
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: manifestConfig,
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_TOKEN,
      host: CONTENTFUL_HOST
    },
  },
  {
    resolve: `gatsby-source-ical`,
    options: {
      name: `events`,
      url: `https://ics.teamup.com/feed/ksyt64me39ssy5e2ko/7027389.ics`,
    },
  },
  {
    resolve: `gatsby-plugin-anchor-links`,
    options: {
      offset: -100
    }
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,

  // this removes the service worker installed by gatsby-plugin-offline
  `gatsby-plugin-remove-serviceworker`,
]

// module.exports = client.getEntries().then(() => {
  module.exports = {
    siteMetadata: {
      author: `Michael Czechowski <maiql@dailysh.it>`,
      description: `THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürger*innen, Künstler*innen, Musiker*innen, Kreative und Initiativen.`,
      lang: `de`,
      title: `THF Radio`,
    },
    plugins,
  }
// })
 
