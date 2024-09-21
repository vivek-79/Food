import React from 'react'
import './PlaceOrder.css'
import {useSelector} from 'react-redux'

function PlaceOrder() {
  const cartTotal=useSelector((state)=>state.menuList.total)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email adress'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-field">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <b>${cartTotal}</b>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <b>${(cartTotal==0 ?0:5)}</b>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>${(cartTotal==0?0:cartTotal+5)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/place-order')}>PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  )
}
export default PlaceOrder