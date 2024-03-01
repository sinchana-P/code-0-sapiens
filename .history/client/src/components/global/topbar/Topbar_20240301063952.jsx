import React, {useState} from 'react'
import './Topbar.css'

const Topbar = () => {
  const [userRole, setUserRole] = useState('Teacheer')

  return (
    <div className='topbar-container'>
        <h2 style={{textAlign: 'left'}} className='logo-text'>Code-0-Sapiens</h2>
        
        <div className='profile-div'>
          {userRole === 'Teacher' ? 'T' : 'S'}
        </div>
    </div>
  )
}

export default Topbar