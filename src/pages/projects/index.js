import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react' // FOR FILTER
import { useMemo } from 'react'
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper'
import * as styles from '../../styles/projects.module.scss'

export default function Projects({ data }) {
  console.log(data)
  // const projects = data.allMdx.nodes

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
              <p>Categories will be placed here</p>
              
              <div>
                <select
                name="category-list"
                id="category-list"
                onChange={handleCategoryChange}
                >
                  <option value="">All</option>
                  <option value="3D Media">3D media</option>
                  <option value="UI/UX design">UI/UX Design</option>
                  <option value="Web Design and Development">Web Design and Development</option>
                </select>
              </div>

              </div>
            </div>
            <div className={styles.tags}>
              <p>Tags will be placed here</p>
            </div>
            <div className={styles.gallery}>
              <p>This is where the gallery is</p>
              <p>New</p>

              <div>
                {filteredList.map(project => (
                  <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <div>
                      <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.slug}/>
                      <h3>{ project.frontmatter.title }</h3>
                    </div>
                  </Link>
                ))}
              </div>

              {/* <div>
                {filteredList.map((element, index) => (
                  <Item {...element} key={index} />
                ))}
              </div> */}

              <p>Old</p>
              {/* <div>
                {projects.map(project =>(
                  <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <div>
                      <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.slug}/>
                      <h3>{ project.frontmatter.title }</h3>
                    </div>
                  </Link>
                ))}
              </div> */}
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