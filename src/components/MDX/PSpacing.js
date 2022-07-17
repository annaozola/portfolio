import React from 'react'
import '../../styles/mdx.scss'

// Pspacing stands for paragraph spacing
export default function PSpacing({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__pspacing">
            { children }
        </div>
    </div>
  )
}
