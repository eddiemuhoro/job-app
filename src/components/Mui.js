
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React, { useEffect, useState } from 'react'
import HomeNavBar from './homePage/HomeNavBar';
import PopUp from './PopUp/PopUp';
import Popup from 'reactjs-popup';
import { Email, Phone, WhatsApp } from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';

export default function Mui() {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        axios.request('https://jobsy.up.railway.app/job')
            .then((response) => {
                setJobs(response.data);
            }).catch((error) => {
                console.log(error);
            })
    })
    return (
        <>
        <HomeNavBar />
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
                        <h3>{job.description}</h3>
                        <p>We have a site that has been running for a couple of years. Recently, it has started looking “unusual” and the JavaScrip</p>
                    </main>
                    <bottom className='job-bottom'>
                        <p>{job.Location}</p>
                        <p>Ksh 450</p>
                    </bottom>
                    <Popup trigger={<Button variant='contained'>Bid</Button> } modal>

                        <div className='bid-popup'>
                             <h2>{job.title}</h2>
                            <h3>Connect!!</h3>
                            <div className='social-icons'>
                                <Phone />
                                <ReactWhatsapp number="+254705982249" message="Hello World!!!"><WhatsApp /></ReactWhatsapp>
                                <Email />
                            </div>
                        </div>
                    </Popup>
            </Paper>
            ))}
           
        </Box>

        </>
    );
}