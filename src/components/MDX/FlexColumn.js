import React from 'react'
import '../../styles/mdx.scss'

export default function FlexColumn({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__flexcolumn">
            { children }
        </div>
    </div>
  )
}
