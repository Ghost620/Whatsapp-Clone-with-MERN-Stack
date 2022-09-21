import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';

const sidebar = () => {
  return (
    <div className='sidebar'>
        sidebar
        <div className='sidebar_header'>
            <div className='sidebar_headerRight'>
                <ChatIcon />
            </div>
        </div>
    </div>
  )
}

export default sidebar