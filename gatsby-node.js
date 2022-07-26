const { reporter } = require('gatsby-cli/lib/reporter/reporter')
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { node } = require('prop-types')

// new, based on Stack Overflow advice
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result1 = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { key: { eq: "3d-media" }}}) {
        nodes {
          frontmatter {
            slug
            category
            tags
            template
          }
        }
      }
    }
  `)

  const result2 = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { key: { eq: "web-dnd" }}}) {
        nodes {
          frontmatter {
            slug
            category
            tags
            template
          }
        }
      }
    }
  `)

  const result3 = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { key: { eq: "ui-ux" }}}) {
        nodes {
          frontmatter {
            slug
            category
            tags
            template
          }
        }
      }
    }
  `)

  // V8.4. S.O. - Change filename 3d-media-details to 3d-media-template
  const mediaTemplate = require.resolve(`./src/templates/3d-media-details.js`)
  const webdndTemplate = require.resolve(`./src/templates/web-dnd-details.js`)
  const uiuxTemplate = require.resolve(`./src/templates/ui-ux-details.js`)
    // Handle errors
    if (result1.errors || result2.errors || result3.errors ) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

  result1.data.allMdx.nodes.forEach( media => {
    createPage({
      path: '/projects/3d-media/' + media.frontmatter.slug, 
      component: mediaTemplate,
      context: { slug: media.frontmatter.slug }
    })
  })

  result2.data.allMdx.nodes.forEach( web => {
    createPage({
      path: '/projects/web-design-and-development/' + web.frontmatter.slug,
      component: webdndTemplate,
      context: { slug: web.frontmatter.slug }
    })
  })

  result3.data.allMdx.nodes.forEach( uiux => {
    createPage({
      path: '/projects/ui-ux-design/' + uiux.frontmatter.slug,
      component: uiuxTemplate,
      context: { slug: uiux.frontmatter.slug }
    })
  })
}