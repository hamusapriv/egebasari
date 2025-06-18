import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo">EgeBasari</Link>
      <button className="mobile-menu-button" onClick={() => setOpen(!open)}>
        &#9776;
      </button>
      <div className={`navbar-links ${open ? 'active' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
