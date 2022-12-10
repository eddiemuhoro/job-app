import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import { Close } from '@mui/icons-material'

import React, { useState } from 'react'
import Popup from 'reactjs-popup'

const PopUp = (job) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
  return (
    <div>
         <Popup trigger={<Button variant='contained'>Bid</Button> } modal>
                    {close => (
                    <div className='enquire-popup'>
                    <button className="close" onClick={close}>
                        <Close/>

                    </button>
                        <h2>Modal Title</h2>
                        <p></p>
                        <FormControl className='form-control'>
                            <label>Name</label>
                            <TextField className='form-input'
                            variant ='outlined'
                             margin='dense'
                             type='text'
                             label='name'
                             title='name'
                             color='secondary'
                             value={name}
                             placeholder='enter name'
                            //  value={name} 
                             />
                            <label>Email</label>
                            <TextField className='form-input'
                             margin='dense'
                             label='email'
                             type='email'
                             title='name'
                             color='secondary'
                             variant='outlined'
                             placeholder='enter email'
                            value={email}
                             />

                            <label>Phone Number</label>
                        <TextField className='form-input'
                             margin='dense'
                             label='phone'
                             type='email'
                             title='name'
                             color='secondary'
                             variant='outlined'
                             placeholder='enter phone number'
                            
                             >
                             </TextField>

                             <label>Message</label>
                             <TextField
                              margin='dense'
                              variant='outlined'
                              placeholder='Movie Description'
                              title='message'
                              color='secondary'
                              id="message" 
                              type='text' 
                              aria-describedby="my-helper-text"
                              label='message' />

                            <Button variant='contained' color='primary' type='submit'>Bid</Button>

                        </FormControl>



                    </div>
                    )}
             </Popup>
    </div>
  )
}

export default PopUp