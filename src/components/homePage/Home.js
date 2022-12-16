import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeNavBar from './HomeNavBar'
import Imagee from '../myImages/image.png'
import { useSelector } from 'react-redux'


const Home = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)

  const postJob = ()=>{
    if(!user){
        alert("log in to post job")
        navigate('/login')
        window.location.reload()
    }
}

  return (
    <div>
        
        <HomeNavBar/>
        {/* <div style={{width:'100%', display:'flex', justifyContent:'right'}}>
           <PopUp />
        </div> */}
        <main className='home-page'>
            <div className='home-wrapper' >
                <section className='image-home'>
                    <img src={Imagee} alt='kenya' />
                </section>  
                <section>
                    <p>Hi <span style={{color:'black', fontWeight:'bolder'}}>{user && user.name}</span> , we're</p>
                    <h1>JOBSY</h1>
                    <p>
                        We make every work available for you
                    </p>
                    <Button onClick={postJob} variant='contained'><Link to='/jobs'>Get Started</Link></Button>
                </section>
          </div>
        
        </main>
        
    </div>
  )
}

export default Home