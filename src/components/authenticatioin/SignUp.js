import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FilledInput, FormControl,  TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
import { reset, register } from '../../react-redux/features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import './auth.css'
import Spinner from '../Spinner/Spinner'

const SignUp = () => {
  const dispatch= useDispatch()
  const navigate= useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const { user, isError, isLoading, isSuccess, message }= useSelector (
    (state)=> state.auth
  )

  useEffect((dispatch)=>{
    if(isSuccess || user){
      toast.success(message)
      navigate('/home')
      window.location.reload()
      dispatch(reset())
    }
    if(isError){
      toast.error(message)
      dispatch(reset())
    }
  }, [user, isSuccess, isError , message, navigate])
  if(isLoading){
    return <Spinner />
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error("🦄 Passwords don't match!");
 
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  const onChange = (e) => {
   
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  return (
    <div className='signup-form'>  
        <SideBar />
    <section className='form'>
    <ToastContainer />
      <div>
      <h1>
       Register
      </h1>
      <p>Please create an account</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Enter password'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
          <p>Already have an account? <Link style={{color:'black'}} to='/login'>Login</Link></p>
        </div>
      </form>
    </section>
  </div>
  )
}

export default SignUp