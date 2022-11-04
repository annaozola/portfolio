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
                <p>I'm Anna - a versatile digital designer and web developer, born and raised in Riga, Latvia, interested in both local and international employment opportunities. My most important values feature compassion, communication, experimentation and continuous learning. For inspiration, I observe other creators works from various mediums such as photography and graphic design. I find that mixing various types of art results in interesting designs.</p>

                <p>I spend a lot of my free time expanding my design and web development knowledge, as well as learning new unrelated skills. At the moment, I'm learning React for web develoment. This website is actually my first React-based project. I built it using the great, open source framework Gatsby. So far, learning React has been a challenging and fun journey. I am also learning Houdini for visual effects as it's a field I want to get into in a couple of years.</p>
              </div>
              <div className={styles.about2}>
                <p>I often work on personal projects such as fan-made levels or textures for video games and random digital art or web development experiments. Even though I consider digital art to be a hobby of mine, I have other hobbies such as skateboarding, reading and playing multiplayer video games. On Saturtday nights you're bound to find me healing teammates in European Hell Let Loose lobbies or doing funky skateboarding tricks in SkaterXL multiplayer.</p>
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