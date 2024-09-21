

import React from 'react'
import './Sidebar.css'
import { assets } from '../../Asset/assets.js'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <div className='sidebar-option'>
            <img className='profile' src={assets.profile_image} alt="" />
            <p>Name:</p>
            </div>
            <NavLink to='add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='order' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar