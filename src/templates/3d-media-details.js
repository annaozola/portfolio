import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.scss'

export default function MediaDetails({ data }) {
  const { media } = data.markdownRemark
  const { title, category, tags, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
        <div className={styles.details}>
            <h2>{title}</h2>
            <h3>{category}</h3>
            <h3>{tags}</h3>
            <div className={styles.featured}>
              <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured"/>
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: media }} />
        </div>
    </Layout>
  )
}

export const query = graphql`
  query MediaDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        category
        tags
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`