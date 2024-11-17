import { Link } from 'react-router-dom'
import './Navbar.css'
import { useEffect, useState } from 'react'

function Navbar({ user }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <h1>Pastelitos</h1>
          {/* We'll add the logo image here once designed */}
        </Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cake-builder">Design Your Cake</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/faq">FAQ</Link>
        {user ? (
          <Link to="/profile" className="profile-link">My Profile</Link>
        ) : (
          <button className="login-btn">Login</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar