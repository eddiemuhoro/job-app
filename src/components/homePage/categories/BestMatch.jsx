import { ThumbDown, ThumbUp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
  return (
    <>
      {loading ? <h1>Loading...</h1> : jobs.map((job) => (
        <div key={job.id} className='job-card'>
          <div className='card-title'>
            <h3>{job.title}</h3>
            <div style={{ display: 'flex' }}>
              <ThumbUp style={{ color: '#375d06', border: '1px solid gray', padding: '5px', borderRadius: '50%' }} />
              <ThumbDown style={{ color: '#375d06', border: '1px solid gray', padding: '5px', borderRadius: '50%', marginLeft: "10px" }} />
            </div>
          </div>
          <div className='card-content'>
            <div className='card-content-left'>
              <p>{job.description}</p>
            </div>
          </div>
          
         
              <div className='card-skills'>
                {
                  job.skills.map((skill) => (
                    <p key={skill}>{skill}</p>
                  ))
                }
              </div>
           
         
        </div>
      ))
      }

    </>

  )
}

export default BestMatch