import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { node } from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'

import AnimatedText from '../components/AnimatedText'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'

// I am using MULTIPLE STYLESHEET MODULES for now but this can be simplified to one later.
import * as styles from '../styles/ui-ux-details.module.scss'
import { useRef } from 'react'

// I am styling this details page as the BASE PAGE and then this page shall be
// copied to other detail pages to avoid useless time-wasting.

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

  // FM useInView
  // const textanim = useRef(null)
  // const ref = useRef(null)
  // const isInView = useInView({ root: textanim })

// BEFORE FRAMER MOTION

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

              {/* {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })} */}
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

                      {/* {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                      })} */}
                    </div>
                  </motion.div>

                  {/* <h4>Date<span>{date}</span></h4> */}
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

  // FM JC
//   const ctrls = useAnimation();
//   const { ref, isInView } = useInView({
//     treshold: 0.5,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (isInView) {
//       ctrls.start("visible");
//     }
//     if (!isInView) {
//       ctrls.start("hidden");
//     }
//   }, [ctrls, isInView]);

//   const wordAnimation = {
//     hidden: {},
//     visible: {},
//   };

//   const characterAnimation = {
//     hidden: {
//       opacity: 0,
//       y: `0.25em`,
//     },
//     visible: {
//       opacity: 1,
//       y: `0em`,
//       transition: {
//         duration: 1,
//         ease: [0.2, 0.65, 0.3, 0.9],
//       },
//     },
//   };

//   return (
//     <Layout>
//       <Wrapper>
//         <div className={styles.details}>
//           <div className={styles.header}>
//             <h1 aria-label={title} role="heading">
//               {title.split("").map((word, index) => {
//                 retrun (
//                   <motion.span
//                     className={word}
//                     style={{ display: "inline-block", marginRight: "0.25em", whiteSpace: "nowrap" }}
//                     ref={ref}
//                     aria-hidden="true"
//                     key={index}
//                     initial="hidden"
//                     animate={ctrls}
//                     variants={wordAnimation}
//                     transition={{
//                       delayChildren: index * 0.25,
//                       staggerChildren: 0.05,
//                     }}
//                   >
//                     {word.split("").map((character, index) => {
//                       return (
//                         <motion.span
//                           className={character}
//                           aria-hidden="true"
//                           key={index}
//                           variants={characterAnimation}
//                         >
//                           {character}
//                         </motion.span>
//                       );
//                     })}
//                     </motion.span>
//                 )
//               })}
//             </h1>
//             <div className={styles.featured}>
//               <GatsbyImage className={styles.image} image={featuredImg.childImageSharp.gatsbyImageData} alt="featured"/>
//             </div>

//             <div className={styles.information}>
//               <div className={styles.grid}>
//                 <div className={styles.date}>
//                   <h4>Date<span>{date}</span></h4>
//                 </div>
//                 <div className={styles.role}>
//                   <h4>Role<span>{role}</span></h4>
//                 </div>
//                 <div className={styles.technologies}>
//                   <h4>Technologies<span>{`${technologies}`}</span></h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <MDXRenderer>{body}</MDXRenderer>
//         </div>
//       </Wrapper>
//     </Layout>
//   )
// }


// BEFORE FRAMER MOTION

// export default function WebdndDetails({ data }) {
//   const { body } = data.mdx
//   const { title, date, role, technologies, featuredImg } = data.mdx.frontmatter

//   return (
//     <Layout>
//       <Wrapper>
//         <div className={styles.details}>
//           <div className={styles.header}>
//             <h1>{title}</h1>
//             <div className={styles.featured}>
//               <GatsbyImage className={styles.image} image={featuredImg.childImageSharp.gatsbyImageData} alt="featured"/>
//             </div>

//             <div className={styles.information}>
//               <div className={styles.grid}>
//                 <div className={styles.date}>
//                   <h4>Date<span>{date}</span></h4>
//                 </div>
//                 <div className={styles.role}>
//                   <h4>Role<span>{role}</span></h4>
//                 </div>
//                 <div className={styles.technologies}>
//                   <h4>Technologies<span>{`${technologies}`}</span></h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <MDXRenderer>{body}</MDXRenderer>
//         </div>
//       </Wrapper>
//     </Layout>
//   )
// }

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