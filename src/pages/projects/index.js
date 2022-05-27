import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper'
import * as styles from '../../styles/projects.module.scss'

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Wrapper>
        <section className={styles.projects}>
          <div className={styles.header}>
              <h1>Projects</h1>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.categories}>
              <p>Categories will be placed here</p>
            </div>
            <div className={styles.tags}>
              <p>Tags will be placed here</p>
            </div>
            <div className={styles.gallery}>
              <p>This is where the gallery is</p>
              <div>
                {projects.map(project =>(
                  <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <div>
                      <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.slug}/>
                      <h3>{ project.frontmatter.title }</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

// export page query
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
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
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      id
    }
  }
}
`