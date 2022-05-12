import React from 'react'
import '../styles/global.scss'

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
        { children }
    </div>
  )
}
