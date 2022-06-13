import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react' // FOR FILTER
import Layout from '../../../components/Layout'
import Wrapper from '../../../components/Wrapper'
import * as styles from '../../../styles/projects.module.scss'

export default function MediaPage({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes

  // Trying out my filter
  const categoryList = data.allMarkdownRemark.nodes

  const [filteredList, setFilteredList] = useState(categoryList);

  const [selectedCategory, setSelectedCategory] = useState("");

  const filterByCategory = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedCategory) {
      return filteredData;
    }

  const filteredCategories = filteredData.filter(
    (category) => category.category.split(" ").indexOf(selectedCategory) !== -1
    );
    return filteredCategories;
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    var filteredData = filterByCategory(categoryList);
    setFilteredList(filteredData);
  },
  [selectedCategory]);

  return (
    <Layout>
      <Wrapper>
        <section className={styles.projects}>
          <div className={styles.header}>
              <h1>3D Media</h1>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.categories}>
              <div>
                <select id={styles.categoryInput} value={selectedCategory} onChange={handleCategoryChange}>
                  <option value="">All</option>
                  <option value="VFX">VFX</option>
                  <option value="Environment Design">Environment Design</option>
                  <option value="Materials">Materials</option>
                </select>
              </div>
              {filteredList.map((item, index) => (
                <div className={styles.categoryItem} key={index}>
                  <div className={styles.categoryCategory}>{`Category: ${item.category}`}</div>
                </div>
              ))}
            </div>
            <div className={styles.tags}>
              <p>Tags will be placed here</p>
            </div>
            <div className={styles.gallery}>
              <p>This is where the gallery is</p>
              <div>
                {projects.map(project =>(
                  <Link to={"/projects/3d-media/" + project.frontmatter.slug} key={project.id}>
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
query MediaPage {
  allMarkdownRemark(
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
          }
        }
      }
      id
    }
  }
}
`