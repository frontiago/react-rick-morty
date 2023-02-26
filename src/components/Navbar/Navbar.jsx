import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">

            <Link to="/" className="fs-3 ubuntu navbar-brand">
                Rick & Morty <span className="text-primary"> WiKi </span>  
            </Link>

            <style jsx="true">
                {`
                    button[aria-expanded="false"] > .close {
                        display: none;
                    }

                    button[aria-expanded="true"] > .open {
                        display: none;
                    }
                `}
            </style>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars open"></i>
                <i className="fas fa-times close"></i>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5 gap-3">
                    <NavLink activeclassname="active" to="/" className="nav-link" > Characters </NavLink>            
                    <NavLink activeclassname="active" to="/episodes" className="nav-link" > Episodes </NavLink>            
                    <NavLink activeclassname="active" to="/location" className="nav-link" > Location </NavLink>    
                </div>                
            </div>

        </div>
    </nav>
  )
}

export default Navbar