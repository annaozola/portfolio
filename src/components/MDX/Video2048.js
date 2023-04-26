import React from 'react'
import '../../styles/mdx.scss'

export default function Video2048({ children }) {
  return (
    <div className="mdxvideo2048">
        <div className="mdxvideo__wrapper2048">
            { children }
        </div>
    </div>
  )
}
