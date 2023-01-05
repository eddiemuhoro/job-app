import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createJob } from '../react-redux/features/jobs/jobSlice';


const Post = () => {
  const employer = useSelector(state => state.auth.employer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const phone = (employer && employer.phone) || ''
  const [postjob, setpostjob] = useState({
    title: '',
    description: '',
    name: '',
    phone: '',
    location: '',
    salary:'',
  }
)

  const handleClick =async (e) => {

    
    e.preventDefault();
    const newjob = {
      title: postjob.title,
      description: postjob.description,
      name:  (employer && employer.name),
      phone: (employer && employer.phoneNum),
      location: postjob.location,
      salary: postjob.salary,
    }

   
    dispatch(createJob(newjob))
    // await axios.post('http://localhost:5000/jobs/new',   newjob)
    // setpostjob({
    //   title: '',
    //   description: '',
    //   employer: '',
    //   location: '',
    //   salary:'',

    // })
    alert('job posted')
    toast.success('job posted')
    navigate('/myprofile')

  }
//sdfsf
  return (
    <div className='form-input'>
  
         <FormControl component="form" noValidate autoComplete="off"
         sx={{
           border:'1px solid grey',
           borderRadius:'5px',
           padding:'20px',
           '& .MuiTextField-root': { m: 1, width: {md:'50ch', lg:'70ch'}},
         }}>
           <h2>JOB POSTING FORM</h2>
         <TextField id="outlined-basic" label="job title" value={postjob.title} variant="filled"
           onChange={(e) => setpostjob({ ...postjob, title: e.target.value })} />
         <TextField id="filled-basic" label="description" value={postjob.description} variant="filled"
           onChange={(e) => setpostjob({ ...postjob, description: e.target.value })} />
         <TextField sx={{display:'none'}}  id="standard-basic" label="name" defaultValue={(employer && employer.name)} variant="filled"
           onChange={(e) => setpostjob({ ...postjob, name: (employer && employer.name)})} />

          <TextField sx={{display:'none'}} id="filled-basic" label="phone" defaultValue={(employer && employer.phoneNum)} variant="filled"
          onChange={(e) => setpostjob({ ...postjob, phone:(employer && employer.phoneNum) })}  />
            
           <TextField id="filled-basic" label="location/ remote" value={postjob.location} variant="filled"
           onChange={(e) => setpostjob({ ...postjob, location: e.target.value })} />

          <TextField id="filled-basic" label="salary" 
           value={postjob.salary} variant="filled"
           onChange={(e) => setpostjob({ ...postjob, salary: e.target.value })} />

        
         <Button variant='contained' onClick={handleClick}>SUBMIT</Button>
       </FormControl>
      
     
    </div>
  )
}

export default Post