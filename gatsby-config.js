const manifestConfig = require(`./manifest-config`)
require(`dotenv`).config()

const { 
  ACCESS_TOKEN, 
  SPACE_ID,
  MIXCLOUD_API
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
      printRejected: true,
      tailwind: true,
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
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: manifestConfig,
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  {
    resolve: `gatsby-source-ical`,
    options: {
      name: `events`,
      url: `https://ics.teamup.com/feed/ksyt64me39ssy5e2ko/7027389.ics`,
    },
  },
  // {
  //   resolve: `gatsby-source-apiserver`,
  //   options: {
  //     typePrefix: `Mixcloud`,
  //     url: MIXCLOUD_API,
  //     method: `get`,
  //     // data: {},
  //     name: `Shows`,
  //     localSave: false,
  //     verboseOutput: true,
  //     enableDevRefresh: true,
  //   },
  // },
  // {
  //   resolve: `gatsby-plugin-remote-images`,
  //   options: {
  //     nodeType: `mixcloud__showsData`,
  //     imagePath: `pictures.medium`,
  //   },
  // },
  `gatsby-plugin-anchor-links`
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

// module.exports = client.getEntries().then(() => {
  module.exports = {
    siteMetadata: {
      author: `Michael Czechowski <mail@dailysh.it>`,
      description: `THF Radio ist die Radiostation im ehemaligen Pförtnerinnenhaus am Flughafen Tempelhof. Experimentierraum und Sprachrohr für Bürger*innen, Künstler*innen, Musiker*innen, Kreative und Initiativen.`,
      lang: `de`,
      title: `THF Radio`,
    },
    plugins,
  }
// })
 