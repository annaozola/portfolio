import React from 'react'
import '../../styles/mdx.scss'

export default function Item({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__item">
            { children }
        </div>
    </div>
  )
}
