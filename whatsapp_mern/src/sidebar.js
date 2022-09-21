import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

const sidebar = () => {
  return (
    <div className='sidebar'>
        sidebar
        <div className='sidebar_header'>
            <div className='sidebar_headerRight'>
                <ChatIcon />
                <DonutLargeIcon />
            </div>
        </div>
    </div>
  )
}

export default sidebar