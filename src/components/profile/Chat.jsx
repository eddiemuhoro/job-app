import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Popup from 'reactjs-popup';
import '../../styles/chat.css'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';

const Chat = ({bid, employee}) => {
    const user = useSelector (state => state.auth.user);
    const employer = useSelector (state => state.auth.employer);


    console.log(`bid:${bid}`);
    console.log(`employee:${employee}`);

    //fetch messages from db
    //display messages
    const [messages, setMessages] = useState([])


    //only fetch messages when a message is sent

    // useEffect(() => {
    //     axios.get(`https://real-rose-millipede-veil.cyclic.app/message/${bid}`)
    //     .then((response) => {
    //         setMessages(response.data);

    //         console.log(`data:${response.data}`);
    //     }
    //     ).catch((error) => {
    //         console.log(error);
    //     })
    // })


    

  

        const [postMessage, setPostMessage] = useState({
            message: '',
            value: (user && user.id) || (employer && employer.id) ,
            receiver: '',
            bid: '',
        })



        const handleSubmit =  (e) => {
            e.preventDefault();
            const newMessage = {
                text: postMessage.message,
                sender: postMessage.value,
                receiver: employee,
                bid: bid,
            }
            console.log(newMessage);
            axios.post('https://real-rose-millipede-veil.cyclic.app/message', newMessage)
             //clear input field after submit
            setPostMessage({
                message: '',
                value: (user && user.id) || (employer && employer.id) ,
                receiver: '',
                bid: '',
            })

            toast.success('Message sent')   

        }

        //fetch messages from db when a message is sent
        //load messages on page load
        useEffect(() => {
            axios.get(`https://real-rose-millipede-veil.cyclic.app/message/${bid}`)
            .then((response) => {
                setMessages(response.data);

                console.log(`data:${response.data}`);
            }
            ).catch((error) => {
                console.log(error);
            })
        })


        const [show, setShow] = React.useState(false)
        const handleShow = () => {
            setShow(!show)
        }

       //delete message from db on double click, actual parameter is the id of the message
        const handleDoubleClick = (id) => {
            console.log(id);
            axios.delete(`https://real-rose-millipede-veil.cyclic.app/message/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        }
       
    


  return (
    <Popup  trigger={<div style={{color:'gray', cursor:"pointer"}}><MessageRoundedIcon /></div>} modal>
        <button onClick={handleShow} style={{backgroundColor:'green', color:'white'}}>{show ? `chat`: `Chat`}</button>
        <div style={{border:"1px solid green", padding:'10px', borderRadius:'10px', }}>
            {
                messages.map((message) => {
                    return (
                        <div key={message.id} style={{margin:"5px 0", }}>  
                        {
                                message.sender === postMessage.value ?
                                 <div style={{display:'flex', justifyContent:'flex-end', height:'auto'}}>
                                    <div>
                                        <div onDoubleClick={() => handleDoubleClick(message.id)} style={{color:"white", padding:'10px', borderRadius:'10px', backgroundColor:'green'}}>
                                            <p style={{margin:"0"}}>{message.message}</p>
                                        </div>
                                        <p style={{margin:"0", color:'gray', fontSize:'12px'}}>{new Date(message.createdAt).toLocaleString()}</p>
                                    </div>
                                 </div> : 
                                 <div style={{display:'flex', justifyContent:'flex-start',  height:'auto'}}>
                                    <div>
                                    <div style={{color:"white", padding:'10px', borderRadius:'10px', backgroundColor:'gray'}}>
                                        <p style={{margin:"0"}}>{message.message}</p>
                                    </div>
                                    <p style={{margin:"0", color:'gray', fontSize:'12px'}}>{new Date(message.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>
                        }
                        </div>
                    )
                }
                )
            }

            <form className='chat-box' onSubmit={handleSubmit}>
                <input className='chat-box-input' style={{width:'100%'}} type="text" placeholder="message" value={postMessage.message}  onChange={(e) => setPostMessage({...postMessage, message: e.target.value})} />
            <button  className="chat-box-send-button">send</button>

            </form>
        </div>
    </Popup>
  )
}

export default Chat