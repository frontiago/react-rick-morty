import {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

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

      <h1 className="text-center my-5 ubuntu">
        Rick & Morty <span className="text-primary"> WiKi </span>  
      </h1>

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
