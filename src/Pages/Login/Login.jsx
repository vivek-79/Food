

import { InputG } from '../../Component/index'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import authService from '../../Appwrite/AuthService'
import { useDispatch} from 'react-redux'
import { logIn } from '../../Store/AuthStatus'
import './Login.css'

function Login() {

  const navigate =useNavigate()
  const dispatch=useDispatch()
  const { register, handleSubmit } = useForm()
  const [error,setError]=useState('')

  const login=async(data)=>{

    try {
      const user= await authService.login(data)
      if(user){
        const data= await authService.getCurrentUser()
        if(data){
          dispatch(logIn(data))
          navigate('/')
        }
      }

    } catch (error) {
      setError(error.message)
    }
  }
 

  return (
    <div className='signUp'>
      <form  
       onSubmit={handleSubmit(login)}
      className='signUpForm'>
        <InputG
          label='Email:'
          placeholder='Email'
          type='email'
          className='inpt'
          autoComplete='email'
          {...register('email', {
            required: true,
          })}
        />
        <InputG
          label='Password:'
          placeholder='Password'
          type='password'
          autoComplete='current-password'
          {...register('password', {
            required: true,
          })}
        />
        <button type='submit' className='btn'>Login</button>
        <p>Don&apos;t Have Account| <Link className='link' to='/signUp'>Sign Up </Link></p>
        {error && <p>{error}</p> }
      </form>
    </div>
  )
}

export default Login