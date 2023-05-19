import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { SEO } from '../../components/Seo'
import { useEffect } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper'
import * as styles from '../../styles/projects.module.scss'

export default function Projects({ data }) {
  console.log(data)

  const [projectList, setProjectList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setProjectList( data.allMdx.nodes );
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return projectList;
    }
    return projectList.filter((project) => project.frontmatter.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, projectList]);

  return (
    <Layout>
      <Wrapper>
        <section className={styles.projects}>
          <div className={styles.header}>
            <h1>Projects</h1>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.categories}>
                <button className="btn" value="" onClick={handleCategoryChange}>All</button>
                <button className="btn" value="3D Media" onClick={handleCategoryChange}>3D Media</button>
                <button className="btn" value="UI/UX design" onClick={handleCategoryChange}>UI/UX Design</button>
                <button className="btn" value="Web Design and Development" onClick={handleCategoryChange}>Web Design and Development</button>
            </div>
            <div className={styles.gallery}>
                {filteredList.map(project => (
                  <Link to={"/projects/" + project.frontmatter.categoryPath + "/" + project.frontmatter.slug} key={project.id}>
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
query ProjectsPage {
  allMdx(
    sort: { fields: frontmatter___date, order: DESC }
    ) {
    nodes {
      frontmatter {
        categoryPath
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

export const Head = () => (
  <SEO title="Projects" />
)