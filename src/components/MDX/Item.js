import React from 'react'
import '../../styles/mdx.scss'

export default function Item({ children }) {
  return (
    <div className="mdxitem">
        { children }
    </div>
  )
}
