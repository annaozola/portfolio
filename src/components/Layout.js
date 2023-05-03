import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.scss'

// Framer motion
import { motion } from 'framer-motion'

export default function Layout({ children }) {

  return (
    <div className="layout">
      <Navbar />
      <motion.content
        initial={{
          opacity: 0,
          x: -200
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{
          opacity: 0,
          x: 200
        }}
        transition={{
          mass:0.35,
          stiffness: 75,
          duration: 0.3
        }}
        >
        { children }
      </motion.content>
      <Footer />
    </div>
  )
}
