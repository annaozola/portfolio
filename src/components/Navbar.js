import React, {  useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// React icons
import { HiOutlineX } from "@react-icons/all-files/hi/HiOutlineX"
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1"

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

  const [showMenu, setShowMenu] = useState(false)

  let menu

  if(showMenu) {
    menu = 
    <div className="mobile-navbar">
      <HiOutlineX onClick={() => setShowMenu(!showMenu)} className="mobile-navbar__toggle" />

      <div className="mobile-navbar__nav links">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/projects/3d-media" activeClassName="active">3D Media</Link>
        <Link to="/projects/web-design-and-development" activeClassName="active">Web Design &amp; Development</Link>
        <Link to="/" activeClassName="active">Contacts</Link>
        <Link to="/resume" activeClassName="active">Resume</Link>
      </div>
    </div>
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/"><h5>{title}</h5></Link>
      </div>

      <HiMenuAlt1 onClick={() => setShowMenu(!showMenu)} className="navbar__mobile-navbar-toggle" aria-controls="navbar__nav" aria-expanded="false">
        <span className="sr-only">Menu</span>
      </HiMenuAlt1>

      <div className="navbar__nav links">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/projects/3d-media" activeClassName="active">3D Media</Link>
        <Link to="/projects/web-design-and-development" activeClassName="active">Web Design &amp; Development</Link>
        <Link to="/" activeClassName="active">Contacts</Link>
        <Link to="/resume" activeClassName="active">Résumé</Link>
      </div>

      { menu }
    </nav>
  )
}