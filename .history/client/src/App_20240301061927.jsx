
import './App.css';
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

function App() {
  return (
    <div className="App">
      <div className='app-container'>
      <Topbar />
      
        <div className='main-content'>
          <div className='left-content-container'>
          <Sidebar /> 
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
              <Route path='/student/attendance' element={ <StdAttendance/> } />
                  
            </Routes>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
