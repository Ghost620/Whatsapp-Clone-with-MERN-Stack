import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined, MoreVert, AttachFile } from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

const Chat = ({ messages }) => {

  const [input, setinput] = React.useState("")

  const sendMsg = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      "message" : input,
      "name": (Math.random() + 1).toString(36).substring(7),
      "timestamp": Date().split(' ')[4],
      "received": Boolean(Math.round(Math.random()))
    })

    setinput('');

  }

  return (
    <div className='chat'>

        <div className='chat_header'>
          <Avatar />

          <div className='chat_headerInfo'>
            <h3>Room Name</h3>
            <p>Last scene</p>
          </div>

          <div className='chat_headerRight'>

            <IconButton>
              <SearchOutlined />
            </IconButton>

            <IconButton>
              <AttachFile />
            </IconButton>

            <IconButton>
              <MoreVert />
            </IconButton>

          </div>

        </div>

        <div className='chat_body'>
          {
            messages.map((msg, ind) => (
              <p key={ind} className={`chat_message ${msg.received && "chat_receiver"}`}>
            
                <span className='chat_name'> { msg.name } </span>
                {msg.message}
                <span className='chat_timestamp'> { msg.timestamp } </span>
    
              </p>
            ))
          }
        </div>

        <div className='chat_footer'>

          <EmojiEmotionsIcon />
          <form>
            <input value={input} onChange={ e => setinput(e.target.value) } placeholder='Type a message...' type='text'/>
            <button onClick={sendMsg} type='submit'>Send a message</button>
          </form>
          <MicIcon />

        </div>

    </div>
  )
}

export default Chat