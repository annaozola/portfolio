import React from "react"
import { motion } from "framer-motion"

import '../styles/global.scss'
import '../styles/header.scss'

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
        </div>
    )
}