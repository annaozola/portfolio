import React from 'react'
import '../../styles/mdx.scss'

export default function Grid1({ children }) {
  return (
    <div className="mdx">
        <div className="mdx__grid1">
            <div className="mdx__item">
                <div className="mdx__item__image">
                    { children }
                </div>
            </div>
        </div>
    </div>
  )
}
