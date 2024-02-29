
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';
import Topbar from './components/global/topbar/Topbar';
import Sidebar from './components/global/sidebar/Sidebar';

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
              <Route path='/register' element={ <Register/> } />
                  
            </Routes>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
