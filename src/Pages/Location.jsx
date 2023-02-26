import {useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup'

const Location = () => {
  
  let [ id, setId ] = useState(1)
  let [ info, setInfo ] = useState([])
  let [ results, setResults ] = useState([])
  let { name, dimension, type } = info

  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json())
      setInfo(data)

      let a = await Promise.all(
        data.residents.map(x => {
          return fetch(x).then(res => res.json())
        })
      )
      setResults(a)
    })()
  }, [api])

  return (
    <div className="container">

      <div className="row mb-5">
        <h1 className="ubuntu text-center mb-3">
          Location: <span className="text-primary"> 
            {name === ' ' ? ' Unknown' : name } 
          </span>          
        </h1>
        <h5 className="text-center"> Dimension: {dimension} </h5>
        <h6 className="text-center mb-3"> Type: {type} </h6>
      </div>

      <div className="row">

        <div className="col-lg-3 col-12 mb-2">
          <h5 className="text-center mb-4"> Pick Location </h5>
          <InputGroup setId={setId} name="Location" total={126} />
        </div>

        <div className="col-lg-8 col-12">
          <div className="row">
            {results.length === 0 ? 
              <h3 className="text-center text-danger"> No residents found </h3> : 
              <Cards page="/location/" results={results} />
            }
          </div>
        </div>

      </div>

    </div>
  )
}

export default Location