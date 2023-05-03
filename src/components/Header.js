import React from "react"
import { motion } from "framer-motion"

import AnimatedText from "./AnimatedText"
import { useInView } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

import '../styles/global.scss'
import '../styles/header.scss'
import Obfuscate from "react-obfuscate"

import resumePDF from "../../static/Anna_Ozola_CV_v1.pdf"

export default function Header() {

    // Framer motion
    const [replay, setReplay] = useState(true);

  const headingtext = [
    {
      type: "heading1",
      text: "I create digital design",
    }
  ]

  const showreeltitle = [
    {
      type: "heading4",
      text: "UI showreel"
    }
  ]

  const showreelparagraph = [
    {
      type: "paragraph",
      text: "Longer, general showreel coming soon."
    }
  ]

  const abouttitle = [
    {
      type: "heading2",
      text: "About"
    }
  ]

  const getintouchtitle = [
    {
      type: "heading4",
      text: "Get in touch"
    }
  ]

  // Motion container
  const mocontainer = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

    return (
        <div className="header">
            <motion.div
                className="header__container"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                >
            </motion.div>
            <div className="header__aboutwrapper">
                <div className="grid">
                    <div className="header__aboutwrapper__about">
                        <motion.div
                        initial="hidden"
                        animate={replay ? "visible" : "hidden"}
                        variants={mocontainer}
                        >
                            <div className="mocontainer">
                            {abouttitle.map((item, index) => {
                                return <AnimatedText {...item} key={index} />
                            })}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity:0 }}
                            animate={{ opacity: 100 }}
                            transition={{
                                delay: 0.25,
                                duration: 8,
                            }}
                        >
                            <p>I'm Anna - a versatile digital designer and web developer, born and raised in Riga, Latvia. I spend a lot of my free time expanding my design and development knowledge. Recently, I have realized that I am very passionate about 3D CGI and VFX so I tend to work on 3D CGI projects whenever I can.</p>
                        </motion.div>
                        <div className="header__aboutwrapper__about__getintouch">
                            <motion.div
                                initial="hidden"
                                animate={replay ? "visible" : "hidden"}
                                variants={mocontainer}
                                >
                                <div className="mocontainer">
                                {getintouchtitle.map((item, index) => {
                                    return <AnimatedText {...item} key={index} />
                                })}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity:0 }}
                                animate={{ opacity:100 }}
                                transition={{
                                    delay: 0.25,
                                    duration: 8,
                                }}
                                >
                                <p>
                                    Email: {' '}
                                    <Obfuscate email="hello@annaozola.com" />
                                    <br />
                                    Phone: <Obfuscate tel="+371 28635159" />
                                </p>
                                <div className="btn">
                                    <a href={resumePDF} download>
                                        <h5>Download My Resume</h5>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}