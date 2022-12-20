import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import MyPosts from './MyPosts'
import './profile.css'
const Profile = () => {
    const user = useSelector(state => state.auth.user)
  return (
    <div className='profile-wrapper'>
      <section className='profile-details'>
        <h2>Profile Details</h2>
        <h1>{user && user.name}</h1>
        <p>{user && user.email}</p>
        <Button sx={{m:1}} variant='contained'>Edit Profile</Button>
      </section>
        <h2>My Posts</h2>
        <MyPosts/>
        
        
    </div>
  )
}

export default Profile