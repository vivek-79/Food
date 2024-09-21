

import React from 'react'
import './ExploreMenu.css'
import {useDispatch,useSelector} from 'react-redux'
import { menu_list } from '../../assets/assets'
import { menuCurrent } from '../../Store/MenuSlice'

function ExploreMenu() {
    const style = useSelector((state)=>(state.menuList.status))
    const dispatch  =useDispatch()
  return (
    <div className='exploreMenu' id='exploreMenu'>
        <h1>Explore our menu</h1>
        <p className='exploreMenuText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dicta commodi eveniet ipsa magnam! Reiciendis voluptates ut saepe .</p>
        <div className='exploreMenuList'>
            {menu_list.map((item,index)=>(
                <div onClick={()=>dispatch(menuCurrent(index))} key={index} className='exploreMenuListItem'>
                {index ===style ?<img className='active' src={item.menu_image}/> :<img src={item.menu_image}/> }
                <p>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
