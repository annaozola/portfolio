import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import '../styles/global.scss'
import '../styles/showreel.scss'
import showreelVideo from '../../static/EFLAnimatedNewX145_final.mp4'

export default function Showreel({ mouseOverEvent, mouseOutEvent }) {

    const [play, setPlay] = useState(false);

    const handleMouseEnter = () => {
      setPlay(true);
    };
    
    const handleMouseLeave = () => {
      setPlay(false);
    };

  return (
    <div
      className="showreel cursor-react"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={mouseOverEvent}
      onMouseOut={mouseOutEvent}
      onFocus={mouseOverEvent}
      onBlur={mouseOutEvent}
      >
      <div className="showreel__wrapper">
        <ReactPlayer
        className='react-player'
        url={showreelVideo}
        width='100%'
        height='30rem'
        controls={false}
        playing={play}
        muted
        loop={true}
        />
      </div>
    </div>
  )
}
