

import React from 'react'
import './AppDown.css'
import { assets } from '../../assets/assets'

function AppDown() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className='app-download-platform'>
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
    </div>
  )
}

export default AppDown