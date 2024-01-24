import React from 'react'
import { KidCon } from './styled'

import kidImg from '../../assets/img/kids.png'

function Kid() {
  return (
    <KidCon>
        <div className="kid__img">
            <img src={kidImg} alt="img" />
        </div>

        <div className="kid__text">
            
            <div className="kid__title">
                <h2>Create profiles for kids</h2>
            
                <p>Send kids on adventures with their favorite <br /> characters in a space made just for them—free with <br /> your membership.</p>
            </div>
        </div>
    </KidCon>
  )
}

export default Kid