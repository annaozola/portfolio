import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'

import AnimatedText from '../components/AnimatedText'

import { motion } from 'framer-motion'
import { useState } from 'react'

// I am using MULTIPLE STYLESHEET MODULES for now but this can be simplified to one later.
import * as styles from '../styles/ui-ux-details.module.scss'

// I am styling this details page as the BASE PAGE and then this page shall be copied to other detail pages

// FM v1
export default function WebdndDetails({ data }) {
  const { body } = data.mdx
  const { title, date, role, technologies, featuredImg } = data.mdx.frontmatter

  // I don't think I need this anymore - replay
  const [replay, setReplay] = useState(true);

  // Title
  const titletext = [
    {
      type: "heading1",
      text: title
    }
  ]

  // Date heading
  const dateheading = [
    {
      type: "heading4",
      text: "Date: "
    }
  ]

  // Date text
  const datetext = [
    {
      type: "heading5",
      text: date
    }
  ]

  // Role heading
    const roleheading = [
    {
      type: "heading4",
      text: "Role: "
    }
  ]

  // Role text
    const roletext = [
    {
      type: "heading5",
      text: role
    }
  ]

  // Tech heading
    const techheading = [
    {
      type: "heading4",
      text: "Technologies: "
    }
  ]

  // Tech text
    const techtext = [
    {
      type: "heading5",
      text: `${technologies}`
    }
  ]

  // Motion container
  const mocontainer = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  return (
    <Layout>
      <Wrapper>
        <div className={styles.details}>
          <div className={styles.header}>
          <motion.div
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            variants={mocontainer}
          >
            <div className="mocontainer">
              {titletext.map((item, index) => {
                return <AnimatedText {...item} key={index} />
              })}
            </div>
          </motion.div>
            <div className={styles.featured}>
              <GatsbyImage className={styles.image} image={featuredImg.childImageSharp.gatsbyImageData} alt="featured"/>
            </div>

            <div className={styles.information}>
              <div className={styles.grid}>
                <div className={styles.date}>
                  <motion.div
                    initial="hidden"
                    animate={replay ? "visible" : "hidden"}
                    variants={mocontainer}
                  >
                    <div className="mocontainer">

                      {dateheading.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                      })}

                      {datetext.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                      })}
                    </div>
                  </motion.div>
                </div>
                <div className={styles.role}>
                  <motion.div
                    initial="hidden"
                    animate={replay ? "visible" : "hidden"}
                    variants={mocontainer}
                  >
                    <div className="mocontainer">

                      {roleheading.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                      })}

                      {roletext.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                      })}

                    </div>
                  </motion.div>
                </div>
                <div className={styles.technologies}>
                  <motion.div
                    initial="hidden"
                    animate={replay ? "visible" : "hidden"}
                    variants={mocontainer}
                  >
                    <div className="mocontainer">

                      {techheading.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                      })}

                      {techtext.map((item, index) => {
                        return <AnimatedText {...item} key={index} />
                      })}

                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query WebdndDetails($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        date(formatString: "YYYY")
        role
        technologies
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1200
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
    }
  }
`