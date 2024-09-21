
import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import {useDispatch, useSelector} from 'react-redux'
import { deleted, selected } from '../../Store/CartSlice'
import config from '../../Appwrite/Config'
import './Card.css'

function Card({
    name ,
    image,
    price,
    description,
}) {
    const dispatch = useDispatch()
    const[imag,setImag]=useState('')
    const count = useSelector((state)=>state.cartSlice)

   useEffect(()=>{
    config.filePreview(image)
    .then((res)=>{
        if(res){
            setImag(res)
        }
    })
   })
    // console.log(Object.keys(count))
    // if(count[ide]){
    //     console.log(count[ide].price)
    // }
    return (
        <div
            className='foodCard'
        >
            <div className='food-item'>
                <img src={imag} alt="" />
            </div>
            <div className='food-item-desc'>
                <div className='food-item-rating'>
                <div className='food-item-add'>
                {!count[imag] ?<img className='plus' src={assets.add_icon_white}
                     onClick={()=>(dispatch(selected({imag,price,name})))}
                    ></img>:
                     <div className='item-add-remove'>
                        <img onClick={()=>dispatch(deleted({imag}))} src={assets.remove_icon_red}></img>
                        {count[imag] &&<p>{count[imag].quantity }</p>}
                        <img onClick={()=>dispatch(selected({imag,price}))} src={assets.add_icon_green}></img>
                     </div>
                    }
                </div>
                    <p>{name}</p>
                    <p>Rating : 4</p>
                </div>
                <p className='food-item-disc'>{description}</p>
                <p className='food-item-price'>${price} </p>
            </div>
        </div>
    )
}

export default Card