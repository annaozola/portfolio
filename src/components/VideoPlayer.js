import React from 'react'
import '../styles/global.scss'
import '../styles/video-player.scss'

import ReactPlayer from 'react-player'

export default function VideoPlayer() {
  return (
    <div className="video-player">
        <div className="grid">
            <div className="video-player__container">
                <div className="video-player__container__wrapper">
                    <ReactPlayer
                        className="video-player__container__wrapper__react-player"
                        width='100%'
                        height='100%'
                        controls={false}
                        loop={true}
                        playing={true}
                        url='https://vimeo.com/434716552'
                        
                        config={{
                            vimeo: {
                                playerOptions: {
                                    controls: 0
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
