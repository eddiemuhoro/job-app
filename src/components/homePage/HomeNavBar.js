import {  StackedBarChart } from '@mui/icons-material'
import { Button, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const HomeNavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div>
        <nav className='navbar'>
            <Link to='/home'>
                <div className='jobsy-logo'>
                    <img src='https://www.clipartmax.com/png/middle/413-4139811_transparent-background-cool-logo.png' alt='jobsy-logo' />
                    <h1>JOBSY</h1>
                </div>
            </Link>
            <div className={isNavExpanded ?  'nav-links mobile' : 'nav-links'}>
                <ul className='nav-list'>
                    <NavLink to='/jobs' style={{textDecoration: 'none'}}><li>Jobs</li></NavLink>
                    <NavLink to='/post' style={{textDecoration: 'none'}}><li>Post</li></NavLink>
                    <NavLink to='/home' style={{textDecoration: 'none'}}><li>Home</li></NavLink>
                    <Button sx={{borderRadius:'20px'}}  variant='contained'><Link style={{color:'white', margin: 0}} to='/login'>Log Out</Link></Button>
                </ul>
            </div>
            <div className='menu-icon' >
                <StackedBarChart onClick={()=> setIsNavExpanded(!isNavExpanded)}/>
            </div>
        </nav>
    </div>
  )
}

export default HomeNavBar