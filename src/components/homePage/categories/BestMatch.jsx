import {  ThumbDown, ThumbUp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {GoVerified} from 'react-icons/go'
import { Link } from 'react-router-dom'
const BestMatch = () => {
  //solutiom
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // }
    axios.request('http://localhost:8000/job')
      .then((response) => {
        setJobs(response.data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setLoading(false)
      }
      )
  }, [])
  const scrollToTop = () => {
    window.scrollTo(0, 0)
} 
  return (
    <>
      {loading ? <h1>Loading...</h1> : jobs.map((job) => (
        <Link onClick={scrollToTop} to={`/job/${job.id}`} key={job.id}>
        <div className='job-card'>
          <div className='card-title'>
            <h3>{job.title}</h3>
            <div style={{ display: 'flex' }}>
              <ThumbUp style={{ color: '#375d06', border: '1px solid gray', padding: '5px', borderRadius: '50%' }} />
              <ThumbDown style={{ color: '#375d06', border: '1px solid gray', padding: '5px', borderRadius: '50%', marginLeft: "10px" }} />
            </div>
          </div>
          <div className='card-content'>
            <div className='card-content-left'>
              <p>We are seeking a talented React Developer with extensive experience in Typescript and Tailwind CSS to join our development team. The successful candidate will work on an ongoing project to develop new features and maintain existing codebases.</p>
            </div>
          </div>
          
         
              <div className='card-skills'>
                {
                  job.skills.map((skill) => (
                    <p key={skill}>{skill}</p>
                  ))
                }
              </div>

              <div className='payment-verification'>
                <div className='payment'>
                  <GoVerified style={{marginRight:"5px"}} />
                  <p> Payment Verified</p>
                </div>
              </div>
        </div>
        </Link>
      ))
      }

    </>

  )
}

export default BestMatch