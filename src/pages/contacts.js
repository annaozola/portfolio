import React from 'react'
import { SEO } from '../components/Seo'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Obfuscate from "react-obfuscate"
import * as styles from '../styles/contacts.module.scss'

export default function Contacts() {
  return (
    <Layout>
      <Wrapper>
        <section className={styles.contacts}>
          <div className={styles.grid}>
            <div className={styles.header}>
              <h1>Contacts</h1>
            </div>
            <div className={styles.infotext}>
              <p>
                Have a proposal, a question or even a relevant topic you want to discuss? Get in touch with me by sending me a message to my email address or by calling my phone number.
              </p>
            </div>
            <div className={styles.info}>
              <p>
                Email: {' '}
                <Obfuscate email="hello@annaozola.com" />
                <br />
                Phone: <Obfuscate tel="+371 28635159" />
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

export const Head = () => (
  <SEO title="Contacts" />
)