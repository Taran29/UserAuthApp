import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger'
import './Navbar.css'

const Navbar = ({ existingUser, setExistingUser }) => {

  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      setExistingUser(true)
    }
  })

  const logoutFunction = () => {
    localStorage.removeItem('auth-token')
    localStorage.removeItem('user')
    setExistingUser(false)
  }

  return (
    <div className="nav-parent">
      <div className="nav-container">
        <Link to="/home" className="nav-logo">Home</Link>
        <ul className="nav-links">
          {existingUser ?
            <>
              <li className="nav-link">
                <Link to="/changeName">Change Name</Link>
              </li>
              <li className="nav-link">
                <Link to="/changePassword">Change Password</Link>
              </li>
              <li className="nav-link">
                <Link to="/login" onClick={logoutFunction}>Logout</Link>
              </li>
            </>
            :
            <>
              <li className="nav-link">
                <Link to="/register">Register</Link>
              </li>
              <li className="nav-link">
                <Link to="/login">Login</Link>
              </li>
            </>
          }
        </ul>
        <Hamburger existingUser={existingUser} setExistingUser={setExistingUser} />
      </div>
    </div>
  )
}

export default Navbar