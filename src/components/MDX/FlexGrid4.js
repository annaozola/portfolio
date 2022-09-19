import React from 'react'
import '../../styles/mdx.scss'

export default function FlexGrid4({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__flexgrid4">
            <div className="mdx__flexgrid4__row">
                { children }
            </div>
        </div>
    </div>
  )
}
