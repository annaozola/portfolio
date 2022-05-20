import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.scss'

export default function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="inner__contacts">
          <h3>Get in touch</h3>
          <p>Email: hello@annaozola.com <br />Phone Nr.: +371 28635159</p>
          <h6>Download my <span>Résumé</span></h6>
        </div>
        <div className="inner__socials">
          <h3>Find me on the web</h3>
          <div className="inner__socials__links">
            <ul className="inner__socials__links__div">
                <li><a href="https://www.linkedin.com/in/annacgfx/">LinkedIn</a></li>
                <li><a href="https://www.behance.net/annacgfx">Behance</a></li>
                <li><a href="https://dribbble.com/annacgfx">Dribbble</a></li>
                <li><a href="https://annaozola.com/">GitHub</a></li>
                <li><a href="https://www.artstation.com/annaozola">Artstation</a></li>
                <li><a href="https://www.instagram.com/annacgfx/">Instagram</a></li>
                <li><a href="https://vimeo.com/annacgfx">Vimeo</a></li>
            </ul>
          </div>
        </div>
        <div className="inner__navigation">
          <h3>Navigation</h3>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/">Contacts</Link>
            <Link to="/">Resume</Link>
        </div>
      </div>
    </footer>
  )
}
