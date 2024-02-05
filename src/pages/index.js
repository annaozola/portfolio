import React from "react"
import { SEO } from "../components/Seo"
import { useState, useEffect } from "react"
import Obfuscate from "react-obfuscate"
import Layout from "../components/Layout"
import Showreel from "../components/Showreel"
import Wrapper from "../components/Wrapper"
import Header from "../components/Header"

import Splash from "../components/Splash"

import resumePDF from "../../static/Anna_Ozola_Resume.pdf"

import * as styles from "../styles/home.module.scss"

export default function Home() {
  // Intro splash
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem("showSplashScreen") == null) {
      sessionStorage.setItem("showSplashScreen", false)
      setTimeout(
        () => {
          setLoading(false)
        },
        2000,
        []
      )
    } else {
      setLoading(false)
    }
  })

  return (
    <>
      {loading ? (
        <Splash loading={loading} />
      ) : (
        <Layout>
          <Header />
          <Wrapper>
            <section className={styles.home}>
              <div className={styles.heading}>
                <h1>I create digital design.</h1>
              </div>
              <Showreel />
              <div className={styles.showreelinfo}>
                <div className={styles.sricontainer}>
                  <h4>EFL Animated UI</h4>
                  <p>Animated UI was created in Adobe After Effects.</p>
                </div>
                <div className={styles.sricontainer}>
                  <h5>
                    <a href="https://vimeo.com/822083951?share=copy">
                      View video
                    </a>
                  </h5>
                </div>
              </div>
              <div className={styles.about}>
                <h2>About</h2>
                <div className={styles.grid}>
                  <div className={styles.about1}>
                    <p>
                      I'm Anna - a versatile digital designer and web developer,
                      born and raised in Riga, Latvia. I spend a lot of my free
                      time expanding my design and development knowledge.
                      Recently, I have realized that I am very passionate about
                      3D CGI and VFX so I tend to work on 3D CGI projects
                      whenever I can.
                    </p>
                  </div>
                  <div className={styles.about2}>
                    <p>
                      I enjoy skateboarding, reading and playing multiplayer
                      video games. On Friday nights you're bound to find me
                      healing teammates in European Hell Let Loose lobbies or
                      dueling in Chivalry 2.
                    </p>
                  </div>
                  <div className={styles.getintouch}>
                    <h4>Get in touch</h4>
                    <p>
                      Email: <Obfuscate email="teesannalv@gmail.com" />
                    </p>
                    <div className={styles.btn}>
                      <a href={resumePDF} download>
                        <h5>Download My Resume</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Wrapper>
        </Layout>
      )}
    </>
  )
}

export const Head = () => <SEO />
