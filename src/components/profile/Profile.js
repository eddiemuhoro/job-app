import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector(state => state.auth.user)
  return (
    <div>
        <h1>Profile Details</h1>
        <h1>{user && user.name}</h1>
        <p>{user && user.email}</p>
        <Button sx={{m:1}} variant='contained'>Edit Profile</Button>
        
        
    </div>
  )
}

export default Profile