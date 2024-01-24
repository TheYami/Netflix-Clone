import React from 'react'
import TvShow from '../../assets/img/tv.png'

import { EnjoyCon } from './styled'

function Enjoy() {
  return (
    <EnjoyCon>
        <div className="enjoy__title">
            <h2>Enjoy on your TV</h2>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br />
             Apple TV, Blu-ray players, and more.</p>
        </div>

        <div className="enjoy__img">
            <img src={TvShow} alt="img" />
            <video  autoPlay playsinline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
            </video>
        </div>
    </EnjoyCon>
  )
}

export default Enjoy