import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({ setStatus, setSpecies, setGender, setPageNumber}) => {

  const clearFilters = () => {
    setStatus('')
    setSpecies('')
    setGender('')
    setPageNumber(1)
    window.location.reload(false)
  }
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-3"> Filters </div>

      <div 
        onClick={clearFilters}
        style={{cursor: 'pointer'}} 
        className="text-center text-decoration-underline text-primary mb-4"> 
          Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />       
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />        
      </div>

    </div>
  )
}

export default Filters

