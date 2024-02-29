
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register';

function App() {
  return (
    <div className="App">
    <Sidebar /> 

    <div>
      
    </div>
      <Routes> 
        <Route path='/' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
         
      </Routes>
    </div>
  );
}

export default App;
