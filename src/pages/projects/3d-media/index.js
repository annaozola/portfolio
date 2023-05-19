import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { SEO } from '../../../components/Seo'
import Layout from '../../../components/Layout'
import Wrapper from '../../../components/Wrapper'
import * as styles from '../../../styles/projects.module.scss'

export default function MediaPage({ data }) {
  console.log(data)
  const projects = data.allMdx.nodes

  return (
    <Layout>
      <Wrapper>
        <section className={styles.projects}>
          <div className={styles.header}>
              <h1>3D Media</h1>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.gallery}>
              {projects.map(project =>(
                <Link to={"/projects/3d-media/" + project.frontmatter.slug} key={project.id}>
                  <div className={styles.item}>
                    <GatsbyImage className={styles.image} image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.slug}/>
                    <div className={styles.details}>
                      <h3>{ project.frontmatter.title }</h3>
                      <h5>{ project.frontmatter.category }</h5>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

// export page query
export const query = graphql`
query MediaPage {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {category: {eq: "3D Media"}}}
  ) {
    nodes {
      frontmatter {
        category
        slug
        tags
        title
        thumb {
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1200
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
      id
    }
  }
}
`

export const Head = () => (
  <SEO title="3D Media" />
)