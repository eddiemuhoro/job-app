import { Box, Paper } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Team = () => {
    const team = [
        {
            id:1,
            name:'Erastus Munyao',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'CEO',
            image:'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG'
        },
        {
            id:2,
            name:'Joseph Kinyua',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'Product Manager',
            image:'https://firebasestorage.googleapis.com/v0/b/apt-rite-346310.appspot.com/o/Jobsy%2FWhatsApp%20Image%202022-12-14%20at%209.45.34%20PM.jpeg?alt=media&token=2b893e44-5e65-4497-93a0-91bf487926b8'
        },
        {
            id:3,
            name:'Edwin Edward',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'Web Developer',
            image:'https://firebasestorage.googleapis.com/v0/b/apt-rite-346310.appspot.com/o/Jobsy%2FWhatsApp%20Image%202022-12-14%20at%209.59.01%20PM.jpeg?alt=media&token=6e26e1cd-e4c0-464c-8309-92eb40ca054f'
        },
        {
            id:4,
            name:'Carol Muthoni',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'Secreatary',
            image:'https://i0.wp.com/www.kahawatungu.com/wp-content/uploads/2019/04/ngina-kenyatta.png?fit=768%2C530&ssl=1'
        },
        {
            id:5,
            name:'Emilio Kariuki',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'BackEnd Developer',
            image:'https://firebasestorage.googleapis.com/v0/b/apt-rite-346310.appspot.com/o/Jobsy%2FWhatsApp%20Image%202022-12-12%20at%209.34.37%20PM.jpeg?alt=media&token=2d700b38-1db0-44d1-9498-6013d2178781'
        },
    ]
  return (
    <div>
        <h1 style={
            {paddingLeft:'20px'}
        }>Our Team</h1>
          <Box
            sx={{
                display: 'grid',
                justifyItems: 'center',
                gridTemplateColumns: {xs:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(5, 1fr)'},
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
            
            {team.map(member => (
                <Paper sx={{position:'relative', padding:'10px'}} elevation={4}>
                  <div className='paper-container'>
                    <img src={member.image} alt={member.name} />
                    <h1>{member.name}</h1>
                    <p>{member.desc}</p>
                    <p className='member-position'>{member.position}</p>

                    <ul className="social-icons material-icons">
                        <li><Link to='instagram/jobsydekut'><Facebook/></Link></li>
                        <li><Link to='instagram/jobsydekut'><Twitter /></Link></li>
                        <li><Link to='instagram/jobsydekut'><LinkedIn/></Link></li>
                        <li><Link to='instagram/jobsydekut'><Instagram /></Link></li>
                    </ul>

                  </div>
              </Paper>
            ))}   
        </Box>
    </div>
  )
}

export default Team