import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
      <nav>
          <div className="inner-nav">
            <h5>Anna Ozola</h5>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
          </div>
      </nav>
  )
}