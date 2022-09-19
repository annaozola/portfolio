import React from 'react'
import '../../styles/mdx.scss'

export default function Flexitem({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__flexitem">
            { children }
        </div>
    </div>
  )
}