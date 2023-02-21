import styles from './Cards.module.scss'

const Cards = ({results}) => {
  let display;

  if(results){
    display = results.map(element => {
      let {id, name, image, location, status} = element

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
        <div key={id} className="col-4 mb-5 position-relative"> 
          <div className={styles.cards}>
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />

            <div className={styles.content}>
              <div className="fs-4 fw-bold mb-4"> {name} </div>
              <div className=""> 
                <div className="fs-6">Last location</div>
                <div className="fs-5"> {location.name} </div>
              </div>
            </div>

          </div>

          <div className={`${styles.badge} position-absolute badge ${checkCharacterStatus()}`}> 
            {status} 
          </div>

        </div>
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