import React from 'react'
import { Button, FilledInput, FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import { Visibility, VisibilityOff } from '@mui/icons-material'


const Login = () => {
  const [values, setValues] = React.useState({
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
       <div className='login-sidebar'>
            <img src='https://t4.ftcdn.net/jpg/02/60/53/37/360_F_260533737_N1QkCY09mwIy7A0Yph79lkqCl0iB2mvF.jpg' alt='login'/>
      </div> 
        <FormControl 
      
      sx={{
         border:'1px solid grey',
         borderRadius:'5px',
          padding:'20px',
          width:'50%',
         '& .MuiTextField-root .MuiFilledInput-root': { m: 1, width: '100%',  },
       }}>
         <h1>Log In</h1>
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
         <Link  style={{width:'100%', margin:'5px'}} to='/home'><Button fullWidth variant='contained'>LOG IN</Button></Link>
         <p>Don't have an account? <Link style={{color:'black'}} to='/'>Sign Up</Link></p>
     </FormControl>
    </div>
  )
}

export default Login