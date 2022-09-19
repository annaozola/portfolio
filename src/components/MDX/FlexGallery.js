import React from 'react'
import '../../styles/mdx.scss'

export default function FlexGallery ({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__flexgallery">
            { children }
        </div>
    </div>
  )
}
