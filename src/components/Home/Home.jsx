import { useState, useEffect } from 'react'
import './Home.css'

const Home = ({ existingUser, setExistingUser }) => {

  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      setExistingUser(false)
    } else {
      setExistingUser(true)
    }

    if (localStorage.getItem('user')) {
      let currentUser = JSON.parse(localStorage.getItem('user'))
      setUser({
        name: currentUser.name,
        email: currentUser.email
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="home-container">
      <h1 className='home-title'>Welcome to User Auth project</h1>
      {existingUser ?
        <>
          <span className='home-text'>Name: {user.name}</span>
          <span className='home-text'>Email: {user.email}</span>
        </> :
        <>
          <span className='home-text'>Seems like you're not logged in. Press the login button in the navbar to proceed.</span>
        </>}
    </div>
  )
}

export default Home