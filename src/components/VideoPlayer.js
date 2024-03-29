import React from 'react'
import '../styles/global.scss'
import '../styles/video-player.scss'

// import ReactPlayer from 'react-player'

export default function VideoPlayer() {

    const ReactPlayer = React.lazy(() => import("react-player"))

  return (
    <div className="video-player">
        <div className="grid">
            <div className="video-player__container">
                <div className="video-player__container__wrapper">
                    <Suspense fallback={<div>Loading...</div>}>
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
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
  )
}
