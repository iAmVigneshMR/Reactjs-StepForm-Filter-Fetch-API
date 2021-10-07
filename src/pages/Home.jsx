import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <section className="card container mx-auto col-md-3 my-5">
                <div className="card-body">
                <button className="btn btn-success btn-block">
              <Link className="nav-link text-light" to="/Stepform">StepForm</Link>
            </button>
            <button className="btn btn-success btn-block">
              <Link className="nav-link text-light" to="/filters">Filter</Link>
            </button>
            <button className="btn btn-success btn-block">
              <Link className="nav-link text-light" to="/api">Fetch API</Link>
            </button>
                </div>
            </section>
        </Fragment>
    )
}

export default Home
