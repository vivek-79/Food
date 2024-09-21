

import React, { useEffect, useState } from 'react'
import './List.css'
import { useSelector } from 'react-redux'
import config from '../../Appwrite/Config'
import { Query } from 'appwrite'
import Card from '../../Component/Card/Card'
import Add from '../Add/Add'
import { Link } from 'react-router-dom'

function List() {

  const userId= useSelector((state)=>state.authState.userData.$id)
  const [deta,setData] =useState([])
  useEffect(()=>{
    const docId =String(userId)
     const list =async()=>{
      try {
        const listData =await config.getAllDocument(Query.equal('userId',docId))
        const detaList=listData.documents
        setData(detaList)
      } catch (error) {
        console.log(error.message)
        throw error
      }
     }
     list()
  },[deta])

  const handleDelete =async(data)=>{
     const del= await config.deleteDoc(data)
      if(del){
        await config.deleteFile(data)
      }
  }
  return (
    <div className='foodDisplay list'>
      <h2>Your Products</h2>
      <div className='foodDisplayList' >
      {deta && deta.map((item,ind)=>(
        <div id={item.imageId} className='item'>
          <Card name={item.item} image={item.imageId} price={item.itemPrice} description={item.itemDescription}/>
          <div className='buttons'>
            <Link to='/admin/add'
              state={{post:item}}
            ><button className='button1'>Edit</button></Link>
            <button onClick={()=>handleDelete(item.$id)} className='button2'>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default List