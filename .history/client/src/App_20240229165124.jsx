
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/login/Login'

function App() {
  return (
    <div className="App">
      <Routes> 
              <Route path='/' element={ <Login/> } />
              <Route path='/regist' element={ <Team/> } />
              
          </Routes>
    </div>
  );
}

export default App;
