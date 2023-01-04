import React from 'react'
import HomeNavBar from '../components/homePage/HomeNavBar'

const EmployerHomePage = () => {
    const employer = JSON.parse(localStorage.getItem('employer'))
  return (
    <div>
        <HomeNavBar />
        <h1>Hello {employer && employer.name}</h1>

    </div>
  )
}

export default EmployerHomePage