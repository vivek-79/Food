
import { InputG } from '../../Component/index'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import React, { useState } from 'react'
import authService from '../../Appwrite/AuthService'
import { logIn } from '../../Store/AuthStatus'
import { useDispatch ,useSelector} from 'react-redux'

function SignUp() {

  const navigate =useNavigate()
  const dispatch =useDispatch()
  const { register, handleSubmit } = useForm()
  const [error,setError]=useState('')

  const signup=async(data)=>{
    setError('')
    try {
      const user= await authService.signUp(data)
      if(user){
        const data= await authService.getCurrentUser()
        
        if(data){
          console.log (data)
          dispatch(logIn(data))
          navigate('/')
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  const user=useSelector((state)=>state.authState.userData)

  return (
    <div className='signUp'>
      <form  
       onSubmit={handleSubmit(signup)}
      className='signUpForm'>
        <InputG
          label='Full Name:'
          placeholder='Enter name'
          type='text'
          autoComplete='Full Name'
          {...register('userName', {
            required: true
          })}
        />
        <InputG
          label='Email:'
          placeholder='Email'
          type='email'
          autoComplete='email'
          {...register('email', {
            required: true,
            validate: {
              matchPattern: (value) => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
                .test(value) || 'Enter valid Email'
            }
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
        <button type='submit' className='btn'>Sign Up</button>
        <p>Already Have Account | <Link className='link' to='/login'>Login</Link></p>
        {error && <p>{error}</p> }
      </form>
    </div>
  )
}

export default SignUp