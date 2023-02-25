import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const CardDetails = () => {
  let { id } = useParams()
  let [ info, setInfo ] = useState([])
  let { name, image, location, origin, gender, species, status, type } = info
  console.log(info)

  const checkCharacterStatus = () => {
    if(status === 'Alive') {
      return 'bg-success'
    } else if(status === 'Dead'){
      return 'bg-danger'
    } else {
      return 'bg-secondary'
    }
  }

  let api = `https://rickandmortyapi.com/api/character/${id}`

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json())
      setInfo(data)
    })()
  }, [api])

  return (
    <div className="container d-flex justify-content-center">

      <div className="d-flex flex-column gap-4">
        <h1 className="text-center"> {name} </h1>
        <img className="img-fluid" src={image} alt="" />
        <div className={`d-flex justify-content-center fs-5 text-light p-2 ${checkCharacterStatus()}`}> 
          {status} 
        </div>

        <div className="content d-flex flex-column gap-2 fs-5">
          <div>
            <span className="fw-bold"> Gender: </span> {gender}
          </div>
          <div>
            <span className="fw-bold"> Species: </span> {species}
          </div>
          <div>
            <span className="fw-bold"> Type: </span> {type === "" ? 'Unknown' : type} 
          </div>
          <div>
            <span className="fw-bold"> Location: </span> {location?.name}
          </div>
          <div>
            <span className="fw-bold"> Origin: </span> {origin?.name}
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardDetails