
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
      
        <div className='content'>
          <Sidebar /> 
          <Routes> 
            <Route path='/' element={ <Login/> } />
            <Route path='/register' element={ <Register/> } />
                
            </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
