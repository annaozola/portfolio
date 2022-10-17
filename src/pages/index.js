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
          <div className={styles.showreelinfo}>
            <div className={styles.sricontainer}>
              <h4>General showreel</h4>
              <p>All kinds of projects.</p>
            </div>
            <div className={styles.sricontainer}>
              <h5>
                <a href="https://vimeo.com/manage/videos/551378240">View reel</a>
              </h5>
            </div>
          </div>
          <div className={styles.about}>
            <h2>About</h2>
            <div className={styles.grid}>
              <div className={styles.about1}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta commodo augue dui cursus enim eu, pharetra. Volutpat nibh at purus amet, eros, egestas sagittis. Fusce nulla a tincidunt enim faucibus sit neque, dolor. Enim euismod eu in fringilla et in.</p>
              </div>
              <div className={styles.about2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh at augue accumsan sagittis velit purus tortor vel. Quis neque faucibus elit nisl, ullamcorper rutrum massa. Eget vestibulum mauris turpis sit. Netus proin dui, maecenas ipsum sed integer lorem sit sit. Nibh accumsan dis urna accumsan non viverra sit curabitur.</p>
              </div>
              <div className={styles.getintouch}>
                <h4>Get in touch</h4>
                <p>
                  Email: hello@annaozola.com
                  <br />
                  Tel. nr.: +371 28635159
                </p>
                <div className={styles.btn}>
                  <h5>Download My Resume</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}