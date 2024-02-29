
// import './App.css';
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
          <Sidebar /> 
          <div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;