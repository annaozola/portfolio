import React from 'react'
import '../../styles/mdx.scss'

export default function VideoWeb({ children }) {
  return (
    <div className="mdxvideoweb">
        <div className="mdxvideo__wrapperweb">
            { children }
        </div>
    </div>
  )
}
