import React from 'react'
import '../../styles/mdx.scss'

export default function Video({ children }) {
  return (
    <div className="mdxvideo">
        <div className="mdxvideo__wrapper">
            { children }
        </div>
    </div>
  )
}
