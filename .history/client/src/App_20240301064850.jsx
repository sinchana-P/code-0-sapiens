
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';
import Topbar from './components/global/topbar/Topbar';
import Sidebar from './components/global/sidebar/Sidebar';
import Home from './components/homeScene/Home';
import Notes from './components/notes/Notes';
import Plans from './components/plans/Plans';
import Attendance from './components/attendance/Attendance';
import Profile from './components/profile/Profile';
import StdAttendance from './components/stdAttendance/StdAttendance'
import StudentSidebar from './components/global/sidebar/StudentSidebar';

function App() {
  const [userRole, setUserRole] = useState('Teacher')

  return (
    <div className="App">
      <div className='app-container'>
      
      <Topbar />
      
        <div className='main-content'>
          <div className='left-content-container'>
          
          {
            userRole === 'Teacher' ? (<Sidebar /> ) : (<StudentSidebar /> )
          }

          </div>
          <div className='right-content-container'>
            <Routes> 
              <Route path='/login' element={ <Login/> } />
              <Route path='/register' element={ <Register/> } />
              <Route path='/home' element={ <Home/> } />
              <Route path='/notes' element={ <Notes/> } />
              <Route path='/attendance' element={ <Attendance/> } />
              <Route path='/plans' element={ <Plans/> } />
              {/* <Route path='/profile' element={ <Profile/> } /> */}
              <Route path='/student' element={ <StdHome/> } />
              <Route path='/student/attendance' element={ <StdAttendance/> } />
              <Route path='/student/attendance' element={ <StdContacts/> } />
              <Route path='/student/attendance' element={ <StdDoubts/> } />
              <Route path='/student/attendance' element={ <StdAttendance/> } />
                  
            </Routes>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;