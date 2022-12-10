import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeNavBar from './HomeNavBar'
import Imagee from '../myImages/image.png'
import PopUp from '../popUp/PopUp'


const Home = () => {
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
                    <p>Hi! , we're</p>
                    <h1>JOBSY</h1>
                    <p>
                        We make every work available for you
                    </p>
                    <Button variant='contained'><Link to='/jobs'>View Jobs</Link></Button>
                </section>
          </div>
        
        </main>
        
    </div>
  )
}

export default Home