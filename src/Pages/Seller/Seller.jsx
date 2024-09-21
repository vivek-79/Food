
import React, { useState } from 'react'
import './Seller.css'
import authService from '../../Appwrite/AuthService'

import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logIn } from '../../Store/AuthStatus'

function Seller() {

    const {register,handleSubmit} =useForm()
    const [error,setError]=useState('')

    const navigate = useNavigate()
    const dispatch =useDispatch()

    const id=useSelector((state)=>state.authState.userData.$id)
    console.log(id)
    const handleForm=async(data)=>{
      try {
         const updated= await  authService.update(data)
          if(updated){
           try {
            const user = await authService.getCurrentUser();
            if(user){
              console.log(user)
              dispatch(logIn(user))
              navigate('/admin')
            }
           } catch (error) {
            console.log(error.message)
           }
          }
        
      } catch (error) {
        setError(error.message)
      }
    }
  return (
    <div className="seller">
  <form
   onSubmit={handleSubmit(handleForm)}
  >
    <div className="form-section">
      <div className="name-group">
        <div className="name-input">
          <label htmlFor="first-name">First Name:</label>
          <input type="text" autocomplete  id="first-name" className="name1"/>
        </div>
        <div className="name-input">
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" autocomplete  id="last-name" className="name1" />
        </div>
      </div>

      <div className="business-group">
        <div className="input-group">
          <label htmlFor="business-name">Business Name:</label>
          <input type="text" autocomplete  id="business-name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" autocomplete  id="email"/>
        </div>
        <div className="input-group">
          <label htmlFor="phone-number">Phone Number:</label>
          <input type="tel" autocomplete  id="phone-number" required {...register('phone')}/>
        </div>
        <div className="input-group">
          <label htmlFor="business-address">Business Address:</label>
          <input type="text" autocomplete  id="business-address" />
        </div>
      </div>

      <div className="upload-group">
        <label htmlFor="menu-upload">Menu Upload:</label>
        <input type="file" autocomplete  id="menu-upload" />
      </div>

      <div className="input-group">
        <label htmlFor="license-no">Licenses No:</label>
        <input type="text" autocomplete  id="license-no" />
      </div>

      <div className="bank-details-group">
        <div className="input-group">
          <label htmlFor="bank-account">Bank Account No:</label>
          <input type="text" autocomplete  id="bank-account"/>
        </div>
        <div className="input-group">
          <label htmlFor="bank-name">Bank Name:</label>
          <input type="text" autocomplete  id="bank-name" />
        </div>
        <div className="input-group">
          <label htmlFor="payment-method">Payment Method Preferences:</label>
          <input type="text" autocomplete  id="payment-method" />
        </div>
      </div>

      <div className="radio-group">
        <label>Choose Business Type:</label>
        <input className='radi' type="radio" name="business-type"  /> Local
        <input className='radi' type="radio" name="business-type"  /> Nationwide
        <input className='radi' type="radio" name="business-type" /> Pickup Only
      </div>

      <div className="input-group">
        <label htmlFor="prep-time">Average Preparation Time:</label>
        <input type="text" autocomplete  id="prep-time" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="text" autocomplete  id="prep-time" />
      </div>
        {error && <p>{error}</p> }
      <button onClick={()=>handleForm} type="submit" className="submit-btn">Register Business</button>
    </div>
  </form>
</div>
  )
}

export default Seller