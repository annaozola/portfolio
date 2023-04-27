import React from "react"
import { motion } from "framer-motion"

import '../styles/global.scss'
import '../styles/header.scss'
import Obfuscate from "react-obfuscate"

export default function Header() {

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
                        <h2>About</h2>
                        <p>I'm Anna - a versatile digital designer and web developer, born and raised in Riga, Latvia. I spend a lot of my free time expanding my design and development knowledge. Recently, I have realized that I am very passionate about 3D CGI and VFX so I tend to work on 3D CGI projects whenever I can.</p>
                        <div className="header__aboutwrapper__about__getintouch">
                            <h4>Get in touch</h4>
                            <p>
                                Email: {' '}
                                <Obfuscate email="teesannalv@gmail.com" />
                                <br />
                                Phone: <Obfuscate tel="+371 28635159" />
                            </p>
                            <div className="btn">
                                <h5>Download My Resume</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="header__getintouchwrapper">
                <div className="grid">
                    <div className="header__getintouchwrapper__getintouch">
                        <h4>Get in touch</h4>
                        <p>
                            Email: {' '}
                            <Obfuscate email="teesannalv@gmail.com" />
                            <br />
                            Phone: <Obfuscate tel="+371 28635159" />
                        </p>
                        <div className="btn">
                            <h5>Download My Resume</h5>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}