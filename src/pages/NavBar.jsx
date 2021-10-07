import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container">
        <a className="navbar-brand" href="#">Reactjs StepForm,Filter,Fetch API</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Stepform">StepForm</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/filters">Filter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api">Fetch API</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
        </Fragment>
    )
}

export default NavBar
