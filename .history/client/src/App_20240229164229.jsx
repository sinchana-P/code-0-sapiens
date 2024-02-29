
// import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/login/Login'

function App() {
  return (
    <div className="App">
      <Routes> 
              <Route path='/' element={ <Login/> } />
              {/* <Route path='/team' element={ <Team/> } /> */}
              
          </Routes>
    </div>
  );
}

export default App;
