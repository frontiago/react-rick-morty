import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import CardDetails from './components/Cards/CardDetails'

import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import Location from './pages/Location'

function App() {
  return (
    <Router>

      <div className="App">
          <Navbar />
      </div>

      <Routes>
        <Route path="/" element={ <Characters /> } />
        <Route path="/:id" element={ <CardDetails /> } />

        <Route path="/episodes" element={ <Episodes /> } />
        <Route path="/episodes/:id" element={ <CardDetails /> } />

        <Route path="/location" element={ <Location /> } />
        <Route path="/location/:id" element={ <CardDetails /> } />
      </Routes>
      
    </Router>
  )
}

export default App;
