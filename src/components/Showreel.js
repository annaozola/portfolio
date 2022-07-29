import React from 'react'
import ReactPlayer from 'react-player'
import '../styles/global.scss'
import '../styles/showreel.scss'
import showreelVideo from '../../static/showreel-temp.mp4'

export default function Showreel() {
  return (
    <div className="showreel">
      <div className="showreel__wrapper">
        <ReactPlayer
        className='react-player'
        url={showreelVideo}
        width='100%'
        height='30rem'
        controls={false}
        playing={true}
        muted
        loop={true}
          
        />
      </div>
    </div>
  )
}
