import React from 'react'
import '../../styles/mdx.scss'

export default function PreFooter({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__prefooter">
            { children }
        </div>
    </div>
  )
}
