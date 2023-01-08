import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {

    const pusher = new Pusher('f67bd1478faa505418f5', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  return (
    <div className="app">
      
      <div className='app_body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
      
    </div>
  );
}

export default App;
