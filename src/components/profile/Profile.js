import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Bids from './Bids'
import MyPosts from './MyPosts'
import './profile.css'
//pnpm :(
const Profile = () => {
    const user = useSelector(state => state.auth.user)
    const employer = useSelector(state => state.auth.employer)
  return (
    <div className='profile-wrapper'>
      <section className='profile-details'>
        <h2>Account Details</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={((user && user.selectedFile) || (employer && employer.selectedFile)) || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJkC07QFuZvIeLEadibGh6ZkDXshm8PakYYzPMMZywg&s'} alt='profile' />
          <h4 style={{marginLeft:'5px'}}>{((user && user.name) || (employer && employer.name))}</h4>
        </div>

     
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h4>Email</h4>
            <p>{((user && user.email) || (employer && employer.email))}</p>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h4>Phone</h4>
            <p>{((user && user.phoneNum) || (employer && employer.phoneNum)) || 'N/A'}</p>
          </div>
     

      </section>
        <h2>My Posts</h2>
        { employer ? (
          <>
           <MyPosts/>
            <Bids />
          </>
           
          ):(
              <h3 style={{height:'50vh', color:'black'}}>Only employers can post jobs<span style={{fontSize:'10px'}}>(Create an employer account to post jobs)</span></h3>
            )}

            

       

    </div>
  )
}

export default Profile