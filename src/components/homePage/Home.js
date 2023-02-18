import { Button, Paper } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeNavBar from './HomeNavBar'
import Imagee from '../myImages/image.png'
import { useSelector } from 'react-redux'
import Greetings from '../Greetings'
import { ThumbDown, ThumbUp } from '@mui/icons-material'


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
        <div className='home-content'>
          <Paper style={{ margin: '0 0 20px 0', textAlign: 'left' }}>
                  <Greetings/>
            </Paper>
          <main style={{width:'100%'}}>
            <input type='search' placeholder='Search for jobs' />
            <section className='jobs-foryou'>
              <h2>Jobs you may like</h2>
              <div className='job-categories'>
                <Link onClick={handleBestMatch} style={{textDecoration: bestMatches ? 'underline' : 'none'}}>Best Match</Link>
                <Link onClick={handleMostRecent} style={{textDecoration: mostRecent ? 'underline' : 'none'}}>Most Recent</Link>
                <Link onClick={handleSavedJobs} style={{textDecoration: savedJobs ? 'underline' : 'none'}}>Saved Jobs</Link>
              </div>
              <div className='job-list'>
                <div className='job-card'>
                  <div className='card-title'>
                    <h3>Software Engineer</h3>
                    <div style={{display:'flex'}}>
                    <ThumbUp style={{color:'#375d06', border:'1px solid gray', padding:'5px', borderRadius:'50%'}}/>
                    <ThumbDown style={{color:'#375d06', border:'1px solid gray', padding:'5px', borderRadius:'50%', marginLeft:"10px"}}/>
                    </div>
                  </div>
                  <div className='card-content'>
                      <div className='card-content-left'>
                      <p>Hi, we'd be looking to adjust an HTML for a landing page https://spadia.shop/supplements/ We're using an a/b testing tool Google Optimize, for which we'd need to align our text based on a document with the use of HTML in the tool.</p>
                      </div>
                   </div>
                   {/* skills */}
                    <div className='card-skills'>
                      <p>HTML</p>
                      <p>CSS</p>
                    </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className='profile-content'>

        </div>
        
    </div>
  )
}

export default Home