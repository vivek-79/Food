

import React, { useEffect, useState } from 'react'
import {Card} from '../index'
import {food_list} from '../../assets/assets'
import { useSelector} from 'react-redux'
import config from '../../Appwrite/Config'
import {Query} from 'appwrite'
import './FoodDisplay.css'

function FoodDisplay() {


  const selIndx = useSelector((state)=>state.menuList.status)

  const [displayItem,setDisplayItem] =useState([])
  useEffect(()=>{
    const Food =async()=>{
      const get = String(selIndx)
      await config.getAllDocument(Query.equal('itemcategory',get))
      .then((item)=>{
        setDisplayItem(item.documents) 
      })
    }
    Food()
  },[selIndx])

  return (
    <div className='foodDisplay'>
      <h2>Top Dishes near you </h2>
      <div className='foodDisplayList'>
      {displayItem && displayItem.map((i,indx)=>(
        <Card  key={i.$id} name={i.item} image={i.imageId} price={i.itemPrice} description={i.itemDescription} ide={i.$id}/>
      ))
      }
      </div>
    </div>
  )
}

export default FoodDisplay