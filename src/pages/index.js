import React from "react"
import Obfuscate from "react-obfuscate"
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
                <p>I'm Anna - a versatile digital designer and web developer, born and raised in Riga, Latvia, interested in both local and international employment opportunities. My most important values feature compassion, communication, experimentation and continuous learning. I spend a lot of my free time expanding my design and web development knowledge, as well as learning new unrelated skills. At the moment, I'm learning React for web develoment. So far, learning React has been a fun and challenging journey.</p>
              </div>
              <div className={styles.about2}>
                <p>I often work on personal projects such as fan-made levels or textures for video games. Even though I consider digital art to be a hobby of mine, I have other hobbies such as skateboarding, reading and playing multiplayer video games. On Saturtday nights you're bound to find me healing teammates in European Hell Let Loose lobbies.</p>
              </div>
              <div className={styles.getintouch}>
                <h4>Get in touch</h4>
                <p>
                  {/* Email: hello@annaozola.com */}
                  Email: {' '}
                  <Obfuscate email="teesannalv@gmail.com" />
                  <br />
                  Phone: <Obfuscate tel="+371 28635159" />
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