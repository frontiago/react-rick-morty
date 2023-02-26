import styles from '../../styles/Cards.module.scss'
import { Link } from 'react-router-dom'

const Cards = ({results, page}) => {
  let display;

  if(results){
    display = results.map(element => {
      let { id, name, image, location, status } = element

      const checkCharacterStatus = () => {
        if(status === 'Dead'){
          return 'bg-danger'
        } else if(status === 'Alive') {
          return 'bg-success'
        } else {
          return 'bg-secondary'
        }
      }
      
      return (
        <Link style={{textDecoration: 'none'}} to={`${page}${id}`} 
          key={id} className="col-lg-4 col-md-6 col-sm-12 mb-5 position-relative text-dark"> 

          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />

            <div className={styles.content}>
              <div className="fs-4 fw-bold mb-4"> {name} </div>
              <div className=""> 
                <div className="fs-6"> Last location </div>
                <div className="fs-5"> {location.name} </div> 
              </div>
            </div>

          </div>

          <div className={`${styles.badge} position-absolute badge ${checkCharacterStatus()}`}> 
            {status} 
          </div>

        </Link>
      )
    })
  } else {
    display = 'No characters found.'
  }

  return (
    <> {display} </>
  )
}

export default Cards