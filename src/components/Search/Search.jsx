import styles from './Search.module.scss'

const Search = ({ setSearch, setPageNumber }) => {

  return (
    <form className="container d-flex flex-sm-row flex-column align-items-center  justify-content-center mb-5 gap-4">
        <input 
          onChange={(e) => {
            setPageNumber(1)
            setSearch(e.target.value)}
          } 
          className={styles.inputSearch} 
          placeholder="Search for characters" type="text"  
        />
        <button onClick={e => e.preventDefault()} className={`${styles.btn} btn btn-primary fs-5`}> Search </button>
    </form>
  )
}

export default Search