import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import { useState, useEffect } from 'react'

import Search from '../components/Search/Search';
import Filters from '../components/Filters/Filters';
import Cards from '../components/Cards/Cards';
import Pagination from '../components/Pagination/Pagination';

const Characters = () => {

    let [ pageNumber, setPageNumber ] = useState(1)
    let [ fetchedData, setFetchedData ] = useState([])
  
    let [ search, setSearch ] = useState('')
  
    let [ status, setStatus ] = useState('')  
    let [ gender, setGender ] = useState('')
    let [ species, setSpecies ] = useState('')
  
    let {info, results} = fetchedData
  
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}
                 &name=${search}&status=${status}&gender=${gender}&species=${species}`
  
    useEffect(() => {
      (async function() {
        let data = await fetch(api).then(res => res.json())
        setFetchedData(data)
        console.log(data)
      })();
    }, [api])
  
    return (
      <div className="App">
  
        <h1 className="ubuntu text-center mb-4"> Characters </h1>
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
  
        <div className="container">
          
          <div className="row">          
              <Filters             
                setGender={setGender}
                setStatus={setStatus}               
                setSpecies={setSpecies}
                setPageNumber={setPageNumber} 
              />
  
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards page="/" results={results} />
              </div>
            </div>
            
          </div>       
  
        </div>
  
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
  
      </div>
    );
  }
  
  export default Characters;