import * as React from "react"
import Layout from '../components/Layout'
import '../styles/global.scss'

const NotFoundPage = () => (
  <Layout>
    <section className="unknownpage">
      <div className="unknownpage__container">
        <h1>404: Error</h1>
        <p>The requested page doesn't exist.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
