

import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useSelector,useDispatch } from 'react-redux'
import {selected,deleted} from '../../Store/CartSlice'
import { useNavigate } from 'react-router-dom'
import {totalCart} from './../../Store/MenuSlice'

function Cart() {
  
  const count = useSelector((state)=>state.cartSlice)
  const[data,setData]= useState([])
  const[total,setTotal] =useState('')
  const dispatch=useDispatch()
   useEffect(()=>{
    if(count){
      const entries=Object.entries(count).map(([imag,details])=>({
        imag,
        ...details,
      }))
      setData(entries)
      let totalPrice=0
      entries.map(({price,quantity})=>{
        totalPrice+=price*quantity
      })
      setTotal(totalPrice)
      dispatch(totalCart(totalPrice))
    }
   },[count])
  

 
  const navigate=useNavigate()
 
  
  return (
    <div className='cart'>
      <div className='cart-items-title'>
        <p>Item</p>
        <p>Title</p>
        <p className='item-price'>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {data.map(({imag,price,quantity,name})=>{
        if(quantity>0){
          return(
            <div key={imag}>
              <div key={imag} className='cart-items-item'>
              <img src={imag} alt="" />
              <p className='item-name'>{name}</p>
              <p >${price}</p>
              <p>{quantity}</p>
              <p>${price*quantity}</p>
              <p onClick={()=>dispatch(deleted({imag}))} className='cart-remove'>x</p>
            </div>
            <hr />
            </div>
          )
        }
      })}
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <b>${total}</b>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <b>${(total==0 ?0:5)}</b>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${(total==0?0:total+5)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/place-order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promo-inpt">
              <input type="text" placeholder='promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Cart