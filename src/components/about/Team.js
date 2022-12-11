import { Box, Paper } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';


const Team = () => {
    const team = [
        {
            id:1,
            name:'John Doe',
            desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'CEO',
            image:'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG'
        },
        {
            id:2,
            name:'John Doe',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'CEO',
            image:'https://cdn.vox-cdn.com/thumbor/paFH_ukJN-2HC3cikjQvKnRv9R0=/0x0:5548x3483/1200x800/filters:focal(2331x1299:3217x2185)/cdn.vox-cdn.com/uploads/chorus_image/image/71238437/1413159437.0.jpg'
        },
        {
            id:3,
            name:'John Doe',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'CEO',
            image:'https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/4237evohdno3t2rsouqb5med7r.jpg'
        },
        {
            id:4,
            name:'John Doe',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'CEO',
            image:'https://i0.wp.com/www.kahawatungu.com/wp-content/uploads/2019/04/ngina-kenyatta.png?fit=768%2C530&ssl=1'
        },
    ]
  return (
    <div>
        <h1>Our Team</h1>
          <Box
            sx={{
                display: 'grid',
                justifyItems: 'center',
                gridTemplateColumns: {xs:'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(4, 1fr)'},
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

                    <ul className="social-icons">
                    <li><Facebook/></li>
                    <li><Twitter /></li>
                    <li><LinkedIn/></li>
                    <li><Instagram /></li>
                </ul>

                  </div>
              </Paper>
            ))}   
        </Box>
    </div>
  )
}

export default Team