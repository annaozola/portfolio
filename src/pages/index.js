import React from "react"
import Layout from '../components/Layout'
import Showreel from '../components/Showreel'
import Wrapper from '../components/Wrapper'
import * as styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <section className={styles.home}>
          <div className={styles.heading}>
            <h1>I create digital design.</h1>
          </div>
          <Showreel />
          <div className={styles.more}>
            <h5>Scroll to view more</h5>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}