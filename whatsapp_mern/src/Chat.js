import React, {useState} from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined, MoreVert, AttachFile } from '@mui/icons-material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios"

const Chat = ( {messages} ) => {

  const [input, setInput] = useState('')
  const sendMessage = (e) => {
    e.preventDefault();

    axios.post('/messages/new', {
      message: input,
      name: 'DEMO',
      timestamp: 'now',
      received: false
    });

    setInput('')
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

          {messages.map((message) => (

            <p className= {`chat_message ${!message.received && "chat_receiver"}`}>
            
            <span className='chat_name'> {message.name} </span>
            {message.message}
            <span className='chat_timestamp'> {message.timestamp} </span>

            </p>

          ))}

        </div>

        <div className='chat_footer'>

          <EmojiEmotionsIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message...' type='text'/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
          <MicIcon />

        </div>

    </div>
  )
}

export default Chat