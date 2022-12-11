import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FilledInput, FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { Link, Router } from 'react-router-dom'
import SideBar from './SideBar'

const SignUp = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
   cpassword:'',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='signup-form'>   
    <SideBar />
        <FormControl 
         sx={{
            border:'1px solid grey',
            borderRadius:'5px',
            padding:'20px',
            width:'50%',
            '& .MuiTextField-root .MuiFilledInput-root': { m: 1, width: 'auto',  },
          }}>
            <h1>Sign Up</h1>
            <TextField type='text' variant='filled' label='Your name'/>
            <TextField type='email' variant='filled' label='Your email'/>
            <FilledInput  variant='filled' label='Your password' placeholder='Your password'
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }/>
          
            <FilledInput
            variant='filled' placeholder='Confirm password'
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.cpassword}
            onChange={handleChange('cpassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle cpassword visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
          />
            <Link style={{margin:'5px'}} to='/home'><Button fullWidth variant='contained'  >SIGN UP</Button></Link>
            <p>Already have an account? <Link style={{color:'black'}} to='/login'>Login</Link></p>
        </FormControl>  
    </div>
  )
}

export default SignUp