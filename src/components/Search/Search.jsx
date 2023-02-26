import styles from '../../styles/Search.module.scss'

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
    </form>
  )
}

export default Search