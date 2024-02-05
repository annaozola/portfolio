import React from "react"
import Obfuscate from "react-obfuscate"
import { Link } from "gatsby"
import "../styles/global.scss"
import resumePDF from "../../static/Anna_Ozola_Resume.pdf"

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="grid">
          <div className="inner__contacts">
            <h3>Get in touch</h3>
            <p>
              Email: <Obfuscate email="hello@annaozola.com" />
            </p>
            <a href={resumePDF} download>
              <h6>
                Download my <span>Résumé</span>
              </h6>
            </a>
          </div>
          <div className="inner__socials">
            <h3>Find me on the web</h3>
            <div className="inner__socials__links">
              <ul className="inner__socials__links__div">
                <li>
                  <a href="https://www.linkedin.com/in/annacgfx/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.behance.net/annacgfx">Behance</a>
                </li>
                <li>
                  <a href="https://dribbble.com/annacgfx">Dribbble</a>
                </li>
                <li>
                  <a href="https://annaozola.com/">GitHub</a>
                </li>
                <li>
                  <a href="https://www.artstation.com/annaozola">Artstation</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/annacgfx/">Instagram</a>
                </li>
                <li>
                  <a href="https://vimeo.com/annaozola">Vimeo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="inner__navigation">
            <h3>Navigation</h3>
            <ul className="inner__navigation__links__div">
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" activeClassName="active">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/3d-media" activeClassName="active">
                  3D Media
                </Link>
              </li>
              <li>
                <Link to="/projects/ui-ux-design" activeClassName="active">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/web-design-and-development"
                  activeClassName="active"
                >
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link to="/contacts" activeClassName="active">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/resume" activeClassName="active">
                  Résumé
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
