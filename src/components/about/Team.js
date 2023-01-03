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
            image:'https://firebasestorage.googleapis.com/v0/b/fir-api-7421d.appspot.com/o/test%2Fras.png?alt=media&token=ffb6c130-088b-4c32-b189-3cadc91c910d'
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
            image:'https://lh3.googleusercontent.com/tZcDCPPf2XZpVPpSBy97uzSTpQmS8jH8jvUoQqDPrP0cUETn_9pFR7GsqQvT0cVMi6_4jYnSsn0XxNfTzg7IdC-193lyFVcTezq3pzffLeSyRHk2Z7BSwCw1V4iZv48vKJFiR2r7HOwuQwzXCc4EotJFk4CWOBMOU4E0rgxcCRFzEXAbio9mNMVHor9PuUU8TU5p-bV1NhYmcwgxEcILOwyUIpZXKPM1PzzOiouRI4jf4g9S6sz_4uygemBWtbXkeUVwUELcMsoTqznqMIbKDdLkkYYTv8LiNnFz6yCFbCxyN-NgkVSR2Ir33hrt2lVbnPkWCWA6rNCA7XM_351fz5mGYeoEAiLAkOJkBijjGgIMZMzW2eEndH0owTDw5M_WvHgwypt1E8hx4jeE0qJI8vEp0nosloaQLauNdzbOa8mLrc6I70dxF8OTihk0LcrTxGhTBT_ygr9shp7RSXQM4hN-CKMhjHXXuIlCB-R2Dxrr_lAchdNuPVEqBsmAtCU_f6VwUpy00emUmWwH8RSDNxPEb17gGn-XAvY65qTGRjLkdFcYrqep6TzYvL5L2eROD3L1Bgg7kr2c6C_RMnEi2T1DvivwggPud5imil5cUrQSt3ZirtOR_FsGFQLfXdwHt5JJm6MciGjF6u6Zb0_vXwsPf1rWHB50yX52kuCSNsZwnZlsCeRcTLUh2pE-tRn4u9nFoWfw8yE3hD1jqYk-LAsFELfz8UnxydQlWiPH-_ro-Uf6w5iRhUfnSXLfv4OoeaFxlGdaEZ85rHRrqheZOgUmzkO48XSCZuOxw_ekt6_oNa2RVwe9ClnZ0ptrBxSMlhJxoTcW6UdU5G6BrALG67iFUOm_BV8jUR80ykGZHTYcA4hOTR_rP4s4yjFROiA7azrlA2ry4CinqS33aHwhWK3yeXzQTs--y2UDcEQsSpSxGLDZYHHTljNhW5CBYkTyIvHJkgvAUSW-uxAkI_8k=w781-h766-no?authuser=0'
        },
        {
            id:4,
            name:'Carol Muthoni',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'Secretary',
            image:'https://lh3.googleusercontent.com/_V5pNPOMFhOuRShgx6XkwyOLtn-3GMUmz6_DL9YtT1YAk2TTH0n3ib0RHYunug-YkmmTp3HyNcvVjJB9Xq7dgcKr-MgcCCifX1nEqtWgbAlC3mDQXB-phu3H-tIxyUrgU32DSdUfv-ep6yENibtfT5PcE6fuYDbETk--QyUzlTDC5xwVRqyghZfhLnJRVlb8TragholRKBjaINELpHDr4Lx7P2qGK-ZMMqQb_vzxYSnW80RcOOnUgtTb3yg7pY2E1fJ3DZEtnN9deyWi67Jqt1pyiVts81Md8TNYcVcQo8-xLgpowKgSKBZ_F-0YOg2wW_AhPJmfHw0UYCl56oOMeYyP4ZAxC2PFmEro6OpWPbK9hCVKdzE_w1_SeB-pYfdBfEubiZy3zwnIPK0dcU2YKAblIa3_Ml8iVXQLcMkO130uk4qwUU1WkT932MfHgZZXW3HP_JIlUtvVyUWGnyNZWjFu5-t5t413fKPCtGTG73XWYSVgXfoS85iV-WtSmS4hIgrZOOGMXOPkgThwzrDVi1AtlyuEifnpyXdDZbPeyR-pyRElM2hPYjsZDzzQgx62h-3Fc9xiC8SDZqsVB8ci1d_5KlU97ItpDb-ZwBUIhzbVkPwE1Lro5PxjzzEDq5hrlGrBeimlCrZKgfn-dswQ38Wb-dTm04M85WWH9GmT7UU27ut7YCSTUD3b8ZE19EjsH8KYPBSmET4pLw0is9SEH2q6t3KciCeKjMILqTpaa6ZIvlSk0dPljVYNiDfHEHrNo2ZgRz0M5aCcuCvi4bPs4O5gfJIt2q6FDjpDZ3AIbuhknZOM-an4zoneB7U0kHec8znDEUyVUTFI5dX-Zax4gX7UYG1akP1pJ1uEuV6iQTY5eeu1ij1IQ2nYsOUodj9bi_Nippmvmx114PV_npz9f1lYscbcviqnzXoDxOdwtWgkRsPLlQke9NsUpPx6Tv2fJBYj_bQyJ5aZPj2h_4iB=w354-h766-no?authuser=0'
        },
        {
            id:5,
            name:'Emilio Kariuki',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            position:'BackEnd Developer',
            image:'https://firebasestorage.googleapis.com/v0/b/apt-rite-346310.appspot.com/o/Jobsy%2FWhatsApp%20Image%202022-12-12%20at%209.34.37%20PM.jpeg?alt=media&token=2d700b38-1db0-44d1-9498-6013d2178781'
        },
        //https://lh3.googleusercontent.com/_AnNcc366eInYm95PKWW94lCuCqvXrX23vNmzTHYMumXeIePiK4WWebRwMZ8UZiazldQCtNzD562ufVkclpuHDB0zvAfzIQoJeTTYZTSInJqKeApdxKWSCoL1tcxjERRHlb0KwG9FPRb0yMqYqOyz7rX_VUEL9o500USrGZMb4Nt1kRJUGbqW3LDF6qRbC07wwuRP9Ypu-6veGaDpwquP1bUH8U9_pXOzDRGAluqatBc938Vk3wvb1iE9rqZI8MmyE_ZZyKyOdrZVcC3qld5S5Eb-ieozL_KgcepAVJei95JCjA6v1j_e292Mq2RRW4WLqPyNk0-ijTBRuuQ6Ikdq29zL1DrqmrYmXUD45_qYu1D9QV4i9j0WtVvQSms6yZqHm84Ybh5yREHj6CeQcyO9kBOp5rNtV0J1HoHNMvAYyo0XlgxLObkb1XZP83B2IOwv08H8eZHG_dE4pKc3CaJe6QRl2_7tFoDcHK48ZrWFxK55wP42PUU66iuINTfacBC8oRQ_pGGQckV17kwVJ6bUjYgdgfFdQyW4Gu76CidbM2pyGL-MfPyICxTkz4QU3nGdvNqsv06PmWzmQXzaG1MUjUcDW9Xk8-dFlVwMPVH1z7-fp5lJ0Ovj2DA-rtFI0CostOzXvwbo5vukUzMkjFfqCn_j58K1OtjaKuk0kDRiLemQiBbH37StE9kb-Kq5fQ5FBHuXWU9S8J1BXPa6x0UQnz93ADW4OcPND2dok9pNkGEjOu2M0lbsOnGmLWgb7cqSgCRgVlUPKQC_KqVewFDfcPXEcxfvqpQK44q_2PhQ2gKk2SZJs0pqhdkaASu0zylbOzW-GGMxH_vSaAjJIrlv4z1wcU11UCIsgCtejA0cY9UtwmpnKi3QetydHKogVoB3sLC1Fsn_fGYNULoFxW_wRaAyYtv3d2kTDS51j0-1nk_O53cYOH1F1kKDYvX5SyAmug60oomCZCT3ngYoqIf=w779-h766-no?authuser=0
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