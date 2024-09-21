

import React from 'react'
import './Admin.css'
import {Sidebar} from './../AdminComp/index'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Admin