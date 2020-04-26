/**
 * This file implements all queryable content called "nodes" and adds 
 * some fields to these nodes, if necessary.
 * 
 * Besides some static content pages will be compiled from the set
 * of provided markdown nodes.
 */

const path = require("path")
const fetch = require("node-fetch")
const moment = require("moment")
const { kebabCase } = require("lodash")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

require("dotenv").config()

const { MIXCLOUD_API } = process.env

exports.sourceNodes = async ({ 
  actions: { createNode }, 
  createContentDigest,
  createNodeId,
}) => {
  const result = await fetch(MIXCLOUD_API)
  const { data } = await result.json()

  data.forEach((node, i) => {
    const nodeId = createNodeId(`${node.key} [${i}] >>> MIXCLOUD`)
    const nodeContent = JSON.stringify(node)

    const showNameSplitted = node.name.split("//")
    const name = showNameSplitted[0].trim()

    const date = showNameSplitted.length > 1
      ? moment(showNameSplitted[1].trim(), "DD.MM.YY")
      : "No date"

    // create show nodes
    const nodeData = {
      ...node,
      name,
      date,
      tags: node.tags.flatMap(({ name }) => name),
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: "Show",
        content: nodeContent,
        contentDigest: createContentDigest(node),
      }
    }

    createNode(nodeData)
  })
}

/**
 * Find all markdown files and add a kebab-cased slug as a field
 * to each queryable node.
 */
exports.onCreateNode = async ({ 
  actions: {
    createNodeField, 
    createNode,
    createParentChildLink,
  },
  cache,
  createContentDigest,
  createNodeId,
  node, 
  store,
}) => {
  if (node.internal.type === "ContentfulStaticPage") {
    const { title, node_locale } = node
    const slug = kebabCase(title)
    const lang = node_locale.split("-")[0]

    createNodeField({ node, name: "slug", value: slug })
    createNodeField({ node, name: "lang", value: lang })
  }

  if (node.internal.type === "Show") {
    let picturesNode

    try {
      picturesNode = await createRemoteFileNode({
        url: node.pictures.large,
        store,
        cache,
        createNode,
        createNodeId: () => `show-${node.slug}-pictures`,
      })
    } catch (e) {
      // Ignore
      console.warn(e)
    }

    if (picturesNode) {
      delete node.pictures;
      node.pictures___NODE = picturesNode.id
    }
  }
}

/**
 * Compile from each markdown file a static content page.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await Promise.all([
    createMarkdownPages({ createPage, graphql, reporter })
  ])
}

/** 
 * Grab all markdown files and provide a unique route to each of them
 * based on the before generated slug.
 */
createMarkdownPages = ({ createPage, graphql, reporter }) => {
  // The template which will be used to compile the markdown contents
  const contentPageTemplate = path.resolve("./src/templates/content.template.js")

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulStaticPage {
              nodes {
                title
                description
                text {
                  text
                }
                fields {
                  slug
                  lang
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reporter.panicOnBuild(`Error while running GraphQL query.`)
          reject(result.errors)
        }

        // Iterate through all fetched data
        result.data.allContentfulStaticPage.nodes.forEach(({ description, title, fields }) => {
          const { slug, lang } = fields

          // Gatsby specific command to create a route
          createPage({
            path: [lang, slug].join("/"),
            component: contentPageTemplate,
            context: {
              description,
              lang,
              slug,
              title
            },
          })
        })
      })
    )
  })
}