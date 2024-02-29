
// import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes> 
              <Route path='/' element={ <Dashboard/> } />
              <Route path='/team' element={ <Team/> } />
              <Route path='/contacts' element={ <Contacts/> } />
              <Route path='/invoices' element={ <Invoices/> } />
              <Route path='/form' element={ <Form/> } />
              <Route path='/calendar' element={ <Calendar/> } />
              <Route path='/faq' element={ <FAQ/> } />
              <Route path='/bar' element={ <Bar/> } />
              <Route path='/pie' element={ <Pie/> } />
              <Route path='/line' element={ <Line/> } />
              <Route path='/geography' element={ <Geography/> } />
          </Routes>
    </div>
  );
}

export default App;
