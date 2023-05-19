import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { SEO } from '../../../components/Seo'
import Layout from '../../../components/Layout'
import Wrapper from '../../../components/Wrapper'
import * as styles from '../../../styles/projects.module.scss'

export default function UiuxPage({ data }) {
  console.log(data)
  const projects = data.allMdx.nodes

  return (
    <Layout>
      <Wrapper>
        <section className={styles.projects}>
          <div className={styles.header}>
              <h1>UI/UX design</h1>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.gallery}>
              {projects.map(project =>(
                <Link to={"/projects/ui-ux-design/" + project.frontmatter.slug} key={project.id}>
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
query UiuxPage {
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {category: {eq: "UI/UX design"}}}
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
  <SEO title="UI/UX Design" />
)