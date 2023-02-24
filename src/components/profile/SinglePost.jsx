import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SinglePost = ({id}) => {
  const [jobs, setJobs] = useState([])
  console.log(`id is ${id}`);
 
  useEffect(() => {
   
      axios.request(`http://localhost:8000/job/${id}`)
          .then((response) => {
              setJobs(response.data);
              console.log(response.data)
          
          }).catch((error) => {
              console.log(error);
          })
  }, [])
  return (
    <div>
      <h2>lkjmn</h2>
       
    </div>
  )
}

export default SinglePost