import { Button, Paper } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeNavBar from './HomeNavBar'
import Imagee from '../myImages/image.png'
import { useSelector } from 'react-redux'
import Greetings from '../Greetings'
import { ThumbDown, ThumbUp } from '@mui/icons-material'
import Profile from '../profile/Profile'
import BestMatch from './categories/BestMatch'
import MostRecent from './categories/MostRecent'

const Home = () => {
  const [bestMatches, setBestMatches] = React.useState(true)
  const [mostRecent, setMostRecent] = React.useState(false)
  const [savedJobs, setSavedJobs] = React.useState(false)

  const handleBestMatch = () => {
    setBestMatches(true)
    setMostRecent(false)
    setSavedJobs(false)
  }

  const handleMostRecent = () => {
    setBestMatches(false)
    setMostRecent(true)
    setSavedJobs(false)
  }

  const handleSavedJobs = () => {
    setBestMatches(false)
    setMostRecent(false)
    setSavedJobs(true)
  }
  console.log(bestMatches, mostRecent, savedJobs)
  const employer = useSelector(state => state.auth.employer)

  const user = useSelector(state => state.auth.user)



  return (
   
    <div className='home-page'>
     
        <HomeNavBar/>
        {/* <div style={{width:'100%', display:'flex', justifyContent:'right'}}>
           <PopUp />
        </div> */}
      {
        employer || user ?
          (<section className='home-2-sections'>
            <div className='home-content'>
              <Paper style={{ margin: '0 0 20px 0', textAlign: 'left' }}>
                <Greetings />
              </Paper>
              <main style={{ width: '100%' }}>
                <input type='search' placeholder='Search for jobs' />
                <section className='jobs-foryou'>
                  <h2>Jobs you may like</h2>
                  <div className='job-categories'>
                    <Link onClick={handleBestMatch} style={{ textDecoration: bestMatches ? 'underline' : 'none' }}>Best Match</Link>
                    <Link onClick={handleMostRecent} style={{ textDecoration: mostRecent ? 'underline' : 'none' }}>Most Recent</Link>
                    <Link t onClick={handleSavedJobs} style={{ textDecoration: savedJobs ? 'underline' : 'none' }}>Saved Jobs</Link>
                  </div>
                  <div className='job-list'>
                    {bestMatches && <BestMatch />}
                    {mostRecent && <MostRecent />}


                  </div>

                </section>
              </main>
            </div>

            <div className='profile-info'>
              <Profile />
            </div>
          </section>) :
          (
            <div style={{height:'90vh'}} className='unregestered'>
              <div>
                <section className='advert'>
                  <h1>
                  Hire the best freelancers for any job, online.
                  </h1>
                </section>

                <section className='advert'>
                  <ul>
                    <li>Any job you can possibly think of</li>
                    <li>Any skill you can possibly think of</li>
                    <li>Any budget you can possibly think of</li>
                  </ul>
                </section>
                <Link to='/joinas'> <Button style={{backgroundColor:'green'}} variant='contained' color='primary'>Get Started</Button></Link>

              </div>
              <div>
                <section className='image-home'>
                    <img src={Imagee} alt='kenya' />
                </section> 
              </div>
             
            </div>
          
          )
      }

      
        
    </div>
  )
}

export default Home