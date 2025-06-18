import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        EgeBasari
      </NavLink>
      <button
        className="mobile-menu-button"
        aria-label="Toggle navigation menu"
        onClick={toggleMenu}
      >
        {open ? '\u2715' : '\u2630'}
      </button>
      <div className={`navbar-links ${open ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
