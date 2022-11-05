import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h3>CARS SPECS</h3></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar