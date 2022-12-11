import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import Team from './Team'

const AboutUs = () => {
  return (
    <div>
        <h1>About Us</h1>
        <main className='about-container'>
            <section className='about-image'>
                <img src='https://cdn3.f-cdn.com/build/css/images/about-us/overview-company-overview.jpg' alt='jobsy ' />
            </section>
            <section className='c'>
                <h1>Company Overview</h1>
                <p>
                Freelancer.com is the world's largest freelancing and crowdsourcing marketplace by number 
                of users and projects. We connect over 63,423,394 employers and freelancers globally from o
                ver 247 countries, regions and territories. Through our marketplace, employers can hire
                 freelancers to do work in areas such as software development, writing,
                 data entry and design right through to engineering, the sciences, sales and marketing, accounting and legal services.
                </p>
                <Button variant='contained'><Link to='/directors'>Team</Link></Button>

            </section>
        </main>
        <Team />
    </div>
  )
}

export default AboutUs