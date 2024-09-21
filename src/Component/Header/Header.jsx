
import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../Appwrite/AuthService'
import './Header.css'
import { LogOut } from '../../Store/AuthStatus'

function Header() {

    const authStat=useSelector((state)=>state.authState.status)
    // const authData=useSelector((state)=>state.authState.userData.prefs)
    // const seller=(Object.keys(authData).length>0)

    const navigate =useNavigate()
    const value =useSelector((state)=>state.cartSlice)
    const dispatch =useDispatch()

    const [state,setState]=useState(false)
    function menuBar(){
        setState(!state)
    }
   
    const val=(Object.keys(value)==0)
    function sessionOut(){
        authService.logOut()
        dispatch(LogOut())
        navigate('/login')
    }

    

  return (
    <header>
        <div className='logo'>
            <Link to=''><img src={assets.logo} alt="" /></Link>
        </div>
        <div className='headerMenu'>
            <ul>
                <li><Link to=''>Home</Link></li>
                <li><a href='#exploreMenu' >Menu</a></li>
                <li><a href='#app-download' >Mobile-app</a></li>
                <li><a href='#footer'>Contact</a></li>
            </ul>
        </div>
        <div className='headerRight'>
            <img src={assets.search_icon} alt="" />
            <div className='headerBasket'>
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={val ? '':'dot'}></div>
            </div>
            <i onClick={()=>menuBar()} className="ri-list-check">
            </i>
            {state && <div className='menu-bar'>
                <ul>
                {authStat && <Link to='/admin' className='menu'><li>Admin</li></Link>}
                {/* {!seller && <Link to='/seller'><li id='seller' className='menu'>Be A Seller</li></Link>} */}
                
                </ul>
                <div className='sign'>
                <button onClick={sessionOut}>Logout</button>:<button onClick={()=>navigate('/login')}>Login</button>
                {authStat?<button onClick={sessionOut}>Logout</button>:<button onClick={()=>navigate('/login')}>Login</button>}
                </div>
            </div> }
        </div>
    </header>
  )
}
export default Header