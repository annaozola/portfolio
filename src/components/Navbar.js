import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
      <nav>
          <h1>Anna Ozola</h1>
          <div className="links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
          </div>
      </nav>
  )
}