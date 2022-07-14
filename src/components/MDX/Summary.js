import React from 'react'
import '../../styles/mdx.scss'

export default function Summary({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__summary">
            { children }
        </div>
    </div>
  )
}
