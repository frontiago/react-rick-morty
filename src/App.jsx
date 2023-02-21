import {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Navbar from './components/Navbar/Navbar'
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Episodes from './Pages/Episodes'
import Location from './Pages/Location'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  )
}


const Home = () => {

  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, setFetchedData] = useState([])

  let [search, setSearch] = useState('')

  let [status, setStatus] = useState('')  
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')

  let {info, results} = fetchedData

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })();
  }, [api])

  return (
    <div className="App">

      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        
        <div className="row">          
            <Filters             
              setGender={setGender}
              setStatus={setStatus}               
              setSpecies={setSpecies}
              setPageNumber={setPageNumber} 
            />

          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
          
        </div>       

      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />

    </div>
  );
}

export default App;