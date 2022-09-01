import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <Link to="/dojo">Home</Link>
          <Link to="/dojo/create">New Blog</Link>
        </div>
      </nav>  
    </div>
  )
}

export default Navbar