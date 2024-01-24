import React from 'react'
import Mobile from '../../assets/img/mobile.jpg'
import boxshot from '../../assets/img/boxshot.png'
import gif from '../../assets/img/download-icon.gif'
import { DownLoadCon } from './styled'

function Download() {
  return (
    <DownLoadCon>
        <div className="download__img">
            <img src={Mobile} alt="img" />

            <div className='downloading'>
                <img src={boxshot} alt="img" />
                <div className='downloading__text'>
                    <p>Stranger Things</p>
                    <p className='blue'>Downloading...</p> 
                </div>
                <img src={gif} alt="gif" />
            </div>
        </div>

        <div className="download__text">
            
            <div className="download__title">
                <h2>Download your shows to
                    <br /> watch offline
                </h2>
            
                <p>Save your favorites easily and always <br />have something to watch.</p>
            </div>
        </div>
    </DownLoadCon>
  )
}

export default Download