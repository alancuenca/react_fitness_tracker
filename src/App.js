import { Routes, Route } from 'react-router-dom'
import { Home, Routines } from './Components'


function App() {
  return (
    // add nav at some point
    <div className="App">
        <h1>Fitness Tracker Home Page</h1>

        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/routines' element={<Routines />} />
        </Routes>
    </div>
  );
}

export default App;
