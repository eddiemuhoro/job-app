import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteGoal } from '../../react-redux/features/jobs/jobSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { LocationOn } from '@mui/icons-material'
import Popup from 'reactjs-popup'
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';


const MyPosts = () => {
    const [jobs, setJobs] = useState([])
    var token = useSelector(state => state.auth.user.token)
    useEffect((jobData) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        axios.request('https://busy-red-deer-toga.cyclic.app/jobs/mypost', config)
            .then((response) => {
                setJobs(response.data);
            
            }).catch((error) => {
                console.log(error);
            })
            
    },[])

    const dispatch = useDispatch()
    const navigate = useNavigate()
//DELETE JOB
   
        var deleteJob=(e, id)=>{
            e.preventDefault();
            if(window.confirm('Are you sure you want to delete this job?')){
                dispatch(deleteGoal(id))
                navigate('/myprofile')
             }
        }


    


    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newEmployer, setNewEmployer] = useState('')
    const [newSalary, setNewSalary] = useState('')






    const updateTitle =async (e, id)=>{
        e.preventDefault();
        if(!newTitle || !newDescription || !newLocation || !newEmployer || !newSalary){
            return alert('Please fill all fields')
        }
        
      await  axios.put (`https://busy-red-deer-toga.cyclic.app/jobs/${id}`, {title: newTitle, description:newDescription, location:newLocation, employer: newEmployer,  salary: newSalary, id:id})

        .then((response)=>{
            console.log(response)
            alert('Job updated')
            navigate('/myprofile')
        }
        ).catch((error)=>{
            console.log(error)
        }
    )
    navigate('/jobs')
 }

  return (
    <div>
        <>
        {jobs.length === 0 && <div style={{height:'60vh'}}><h1>No jobs posted</h1></div>}
        {jobs.map(job => (
                 <Paper sx={{position:'relative', padding:'10px', width:'70%', m:1}} elevation={4}>
                     <div className=''>
                     <div className='job-title'>
                         <h1>{job.title}</h1>
                     </div>
                     <main className='job-description'>
                         <p>{job.description}</p>
                     </main>
                     
                     <div>
                         <div className='job-bottom'>
                             <div style={{display:'flex', alignItems:'center'}}>
                                 <LocationOn /><p>{job.location}</p>
                             </div>
                             <p>Ksh. {job.salary}</p>
                         </div>
                         <div  className='job-time'>                         
                         <Button variant='contained'  onClick={(e, id)=> deleteJob(e, job._id)} >delete</Button>
                      
                         <Popup trigger={<Button variant='contained'>Update</Button> } modal>
                                 <div className='bid-popup'>


                                 <FormControl component="form" noValidate autoComplete="off"
                                        sx={{
                                        border:'1px solid grey',
                                        borderRadius:'5px',
                                        padding:'20px',
                                        '& .MuiTextField-root': { m: 1, width: {md:'50ch', lg:'auto'}},
                                        }}>
                                        <h2>JOB POSTING FORM</h2>
                                        <TextField id="outlined-basic" label="job title"  value={newTitle.title}  onChange={(e)=>{setNewTitle(e.target.value)}} />
                                        <TextField id="filled-basic" label="description" value={newDescription.description}  onChange={(e)=>{setNewDescription(e.target.value)}} />
                                        <TextField id="standard-basic" label="employer" value={newEmployer.salary}  onChange={(e)=>{setNewEmployer(e.target.value)}}/>
                                        <TextField id="filled-basic" label="location"  value={newLocation.location}  onChange={(e)=>{setNewLocation(e.target.value)}} />
                                        <TextField id="filled-basic" label="salary" 
                                       value={newSalary.salary}  onChange={(e)=>{setNewSalary(e.target.value)}}/>
                                        <Button variant='contained' onClick={(e,id)=> updateTitle(e,job._id)}>SUBMIT</Button>
                             </FormControl>

                                 </div>
                             
                             </Popup>
                         </div>
                        
                     </div>
                 </div>
             </Paper>
             ))}
        </>
    </div>
  )
}

export default MyPosts