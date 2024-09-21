import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Component'

function App() {

  return (
    <>
    <div className='app'>
      <Header/>
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default App
