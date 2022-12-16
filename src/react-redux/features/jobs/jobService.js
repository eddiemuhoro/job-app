import axios from 'axios'

const API_URL = 'https://jobsy.up.railway.app/';

const createJob = async(jobData, token)=>{
  
    const response = await axios.post(API_URL + 'job', jobData,
    //  { headers: {
    //   Authorization: `Bearer ${token}`,
    // },}
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
  
const jobService={
    createJob,
    deleteGoal
}
export default jobService