import React from 'react'
import '../../styles/mdx.scss'

export default function Spacing({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__spacing">
            { children }
        </div>
    </div>
  )
}
