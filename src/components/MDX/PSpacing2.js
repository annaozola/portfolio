import React from 'react'
import '../../styles/mdx.scss'

// Pspacing stands for paragraph spacing
export default function PSpacing2({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__pspacing2">
            { children }
        </div>
    </div>
  )
}