import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import { Button, Paper } from '@mui/material'
const Bids = () => {
    const [bids, setBids] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    var token = useSelector(state => state.auth.employer.token)
    React.useEffect(() => {
        setLoading(true)
        axios.request('http://localhost:4000/message', 
        
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
                
                )
            .then((response) => {

                setBids(response.data);
                console.log(response.data)
            }).catch((error) => {
                console.log(error);

            }
            ).finally(() => {
                setLoading(false)
            })
        }, []
    )
    
  return (
    <div>
        <h1>Bids</h1>
        {bids.map((bid) =>  {return (
            <div key={bid._id}>
                <Paper sx={{position:'relative', padding:'10px', width:{xs: '80%', ls:'60%'}, m:1}} elevation={4}>
                     <div className=''>
                     <div className='job-title'>
                         <h1>Hello</h1>
                     </div>
                     <main className='job-description'>
                         <p>{bid.message}</p>
                     </main>
                     
                     <div>
                        
                         <div  className='job-time'>                         
                        
                      
                         <Popup trigger={<Button variant='contained'>Reply</Button> } modal>
                                 <div className='bid-popup'>


                                 </div>
                             
                             </Popup>
                         </div>
                        
                     </div>
                 </div>
             </Paper>
            </div>

        )})}
    </div>
  )
}

export default Bids