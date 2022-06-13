import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
      <nav>
          <div className="inner-nav">
            <h5>{ title }</h5>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/projects/3d-media">3D Media</Link>
                <Link to="/projects/web-design-and-development">Web Design &amp; Development</Link>
                <Link to="/">Contacts</Link>
                <Link to="/resume">Resume</Link>
            </div>
          </div>
      </nav>
  )
}