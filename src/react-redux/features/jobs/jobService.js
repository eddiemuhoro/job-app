import axios from 'axios'

const API_URL = 'https://busy-red-deer-toga.cyclic.app/';

const createJob = async(jobData, token)=>{
  
    const response = await axios.post(API_URL + 'jobs/new', jobData,
     { headers: {
      Authorization: `Bearer ${token}`,
    },}
    )

    return response.data
}

const getJob = async()=>{
  
  const response = await axios.get(API_URL + 'jobs',

  )

  return response.data
}

//get employer info
const getEmployer = async()=>{
  const response = await axios.get(API_URL + 'jobs/employers',
)
  return response.data
}

const deleteGoal = async (jobId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await axios.delete(API_URL + 'jobs/' + jobId, config)
  
    return response.data
  }

  const  updateJob = async (jobId, jobData) => {
  
    const response = await axios.put(API_URL + 'jobs/' + jobId, jobData)

    return response.data
  }
  
const jobService={
    createJob,
    deleteGoal,
    getJob,
    getEmployer,
    updateJob
}
export default jobService