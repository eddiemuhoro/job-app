
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React, { useEffect, useState } from 'react'
import HomeNavBar from './homePage/HomeNavBar';

import Popup from 'reactjs-popup';
import { Email, LocationOn, Phone, WhatsApp } from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';


export default function Mui() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.request('https://jobsy.up.railway.app/job')
            .then((response) => {
                setJobs(response.data);
                const deadline =response.data.title
                console.log(deadline)
            }).catch((error) => {
                console.log(error);
            })
            
    })
    
    return (
        <>
        <HomeNavBar />
        <Paper style={{margin:'30px', textAlign: 'left'}}>
            <div className='time'>
            <h2>Saturday, December 10th</h2>
            <h1>Good Evening</h1>
            </div>
        </Paper>
        <Box
            sx={{
                display: 'grid',
                justifyItems: 'center',
                gridTemplateColumns: {xs:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)'},
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'text.primary',
                '& > :not(style)': {
                    m: 1,
                    width: '70%',
                    height: 'auto',
                },
            }}
        >
           
            {jobs.map(job => (
                <Paper sx={{position:'relative', padding:'10px'}} elevation={4}>
                    <top className='job-title'>
                        <h1>{job.title}</h1>
                        <FavoriteIcon  />
                    </top>
                    <main className='job-description'>
                        <p>{job.description}</p>
                    </main>
                    <bottom className='job-bottom'>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <LocationOn /><p>{job.location}</p>
                        </div>
                        <p><span>Est. Budget</span>Ksh 450</p>
                    </bottom>
                    <div className='job-time'>
                    
                    <Popup trigger={<Button variant='contained'>Bid</Button> } modal>
                             <h2>{job.title}</h2>
                            <h3>Connect with {job.employer}</h3>
                            <div className='social-icon'>
                            <Phone /><a href="tel:+254 791849836"> <span>Call</span></a> 
                                 <p>+254 705982249</p>
                                <ReactWhatsapp number="+254705982249" message="Hello World!!!"><WhatsApp /></ReactWhatsapp><span>WhatsApp</span>
                               
                            </div>
                      
                    </Popup>
                    </div>
            </Paper>
            ))}
           
        </Box>

        </>
    );
}