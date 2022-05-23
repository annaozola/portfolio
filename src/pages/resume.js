import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Resumecomp from '../components/Resumecomp'

export default function Resume() {
  return (
    <Layout>
      <Wrapper>
        <Resumecomp />
        {/* <section className={styles.resume}>
          <div className={styles.grid}>
            <div className={styles.header}>
              <div className={styles.header__flex}>
                <h1>Anna Ozola</h1>
                <button className="btn">Download PDF</button>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.grid}>
                <div className={styles.info__contacts}>
                    <p>hello@annaozola.com <br />+371 28635159 <br />Currently located in <br /><span>Riga, Latvia</span>.</p>
                </div>
              <div className={styles.info__socials__one}>
                <ul>
                    <li>LinkedIn: @annacgfx</li>
                    <li>Behance: @annacgfx</li>
                    <li>Dribbble: @annacgfx</li>
                    <li>GitHub: @annaozola</li>
                </ul>
              </div>
              <div className={styles.info__socials__two}>
                <ul>
                    <li>Artstation: @annaozola</li>
                    <li>Instagram: @annacgfx</li>
                    <li>Vimeo: @annaozola</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.grid}>
              <div className={styles.skills__header}>
                <h1>Skills</h1>
              </div>
            </div>
            <div className={{...styles.grid, ...styles.gridpadding}}>
              <div className={styles.skills__one}><h6>Prg. Langauges, Libraries and Platforms</h6></div>
              <div className={styles.skills__two}><p>HTML, CSS, JavaScript, SCSS, React, GatsbyJS, WordPress.</p></div>
            </div>
            <div className={styles.grid}>
              <div className={styles.skills__three}><h6>Languages</h6></div>
              <div className={styles.skills__four}><p>Latvian, English, Russian (beginner).</p></div>
            </div>
              <div className={styles.skills__five}><h6>Applications</h6></div>
              <div className={styles.skills__six}><h6>3D Media</h6></div>
              <div className={styles.skills__seven}><h6>Design</h6></div>
              <div className={styles.skills__eight}><h6>Video Media</h6></div>
              <div className={styles.skills__nine}>
                <ul>
                  <li>Blender</li>
                  <li>Houdini</li>
                  <li>Substance 3D Painter</li>
                  <li>Substance 3D Designer</li>
                  <li>Substance 3D Sampler</li>
                  <li>SpeedTree</li>
                  <li>Unity</li>
                </ul>
              </div>
              <div className={styles.skills__ten}>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Xd</li>
                  <li>Illustrator</li>
                  <li>Photoshop</li>
                  <li>InDesign</li>
                  <li>Lightroom</li>
                </ul>
              </div>
              <div className={styles.skills__eleven}>
                <ul>
                  <li>DaVinci Resolve</li>
                  <li>Premiere</li>
                  <li>After Effects</li>
                </ul>
              </div>
          </div>
        </section> */}
      </Wrapper>
    </Layout>
  )
}
