
// import './App.css';
import { Routes, Route } from 'react-router-dom'

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
