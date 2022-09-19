import React from 'react'
import '../../styles/mdx.scss'

export default function Social({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__social">
            { children }
        </div>
    </div>
  )
}