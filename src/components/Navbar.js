import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:props.mode==='dark'?'black':'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
            <div className="container-fluid" >
    <Link className="navbar-brand" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </Link>
            <ul className="dropdown-menu">
            <li><Link className="dropdown-item" style={{ color: props.mode === 'dark' ? 'black' : 'white' }} to="/">Action</Link></li>
            <li><Link className="dropdown-item" style={{ color: props.mode === 'dark' ? 'black' : 'white' }} to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" style={{ color: props.mode === 'dark' ? 'black' : 'white' }} to="/">Something else here</Link></li>
            </ul>
        </li>
        <li className="nav-item">
            <Link className="nav-link disabled" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} aria-disabled="true">Disabled</Link>
        </li>
        </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" style={{cursor:"pointer"}} role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" style={{marginRight:'0px', paddingRight:'00px'}} htmlFor="switchCheckDefault">Enable dark mode</label>
        </div>
    </div>
    </div>
</nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps={
    title:"Default title",
    about: "Default about"
};