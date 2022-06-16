import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'

// I am using MULTIPLE STYLESHEET MODULES for now but this can be simplified to one later.
import * as styles from '../styles/3d-media-details.module.scss'

// I am styling this details page as the BASE PAGE and then this page shall be
// copied to other detail pages to avoid useless time-wasting.

export default function MediaDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, date, role, technologies, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Wrapper>
        <div className={styles.details}>
          <div className={styles.header}>
            <h1>{title}</h1>
            <div className={styles.featured}>
              <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} alt="featured"/>
            </div>

            <div className={styles.grid}>
              <div className={styles.date}>
                <h4>Date<span>{date}</span></h4>
              </div>
              <div className={styles.role}>
                <h4>Role<span>{role}</span></h4>
              </div>
              <div className={styles.technologies}>
                <h4>Technologies<span>{technologies}</span></h4>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h2>Summary</h2>
            <p></p>
          </div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query MediaDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "YYYY")
        role
        technologies
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