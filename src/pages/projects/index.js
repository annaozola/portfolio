import React from 'react'
import Layout from '../../components/Layout'
import Wrapper from '../../components/Wrapper'
import * as styles from '../../styles/projects.module.scss'

export default function Projects() {
  return (
    <Layout>
      <Wrapper>
        <section>
          <div className={styles.header}>
              <h1>Projects</h1>
          </div>
          <div className={styles.portfolio}>
            <div className={styles.categories}>
              <p>test</p>
            </div>
            <div className={styles.tags}>
              <p>test</p>
            </div>
            <div className={styles.gallery}>
              <p>gallery here</p>
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}