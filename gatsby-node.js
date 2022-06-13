const { reporter } = require('gatsby-cli/lib/reporter/reporter')
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const { node } = require('prop-types')

// new, based on Stack Overflow advice
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
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
      allMarkdownRemark {
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
      allMarkdownRemark {
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
  const webDndTemplate = require.resolve(`./src/templates/web-dnd-template.js`)
    // Handle errors
    if (result1.errors || result2.errors ) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

  result1.data.allMarkdownRemark.nodes.forEach( media => {
    createPage({
      path: '/projects/3d-media/' + media.frontmatter.slug, 
      component: mediaTemplate,
      context: { slug: media.frontmatter.slug }
    })
  })

  result2.data.allMarkdownRemark.nodes.forEach( web => {
    createPage({
      path: '/projects/web-design-and-development/' + web.frontmatter.slug,
      component: webDndTemplate,
      context: { slug: web.frontmatter.slug }
    })
  })

  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/projects/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/project-details.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // })

  // V8.3. S.O.
  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/projects/3d-media/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/3d-media-details.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // })

  // // v8.2. S.O.
  // result.data.allMarkdownRemark.edges.forEach(({ node }) = {
  //   createPage({
  //     path: '/projects/3d-media/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/3d-media-details.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // })

  // // my v8.1.
  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/projects/3d-media/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/3d-media-details.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // })
}