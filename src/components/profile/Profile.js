import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import MyPosts from './MyPosts'
import './profile.css'
//pnpm :(
const Profile = () => {
    const user = useSelector(state => state.auth.user)
  return (
    <div className='profile-wrapper'>
      <section className='profile-details'>
        <h2>Account Details</h2>
             <img src={(user && user.selectedFile)|| 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJkC07QFuZvIeLEadibGh6ZkDXshm8PakYYzPMMZywg&s'} alt='profile' />
             <h4>Name</h4>
                <p>{user && user.name}</p>
              <h4>Email</h4>
                <p>{user && user.email}</p>
              <h4>Phone</h4>
                <p>{(user && user.phone )|| 'N/A'}</p>
      
      </section>
        <h2>My Posts</h2>
        <MyPosts/>
        
        
    </div>
  )
}

export default Profile