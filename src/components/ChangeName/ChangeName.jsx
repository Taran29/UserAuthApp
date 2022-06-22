import { useState } from 'react'
import TextField from '../../utils/TextField/TextField.jsx'
import { useNavigate } from 'react-router-dom'
import './ChangeName.css'


const ChangeName = () => {

  const [name, setName] = useState('')

  const navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault()

    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    let response
    try {
      response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/updateName/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': localStorage.getItem('auth-token')
        },
        body: JSON.stringify({
          name: name
        })
      })
    } catch (error) {
      alert('Cannot connect to the server. Please try again later')
      return
    }

    if (response.status === 502) {
      alert('Cannot connect to the server. Please try again later')
      return
    }

    if (response.status === 200) {
      user.name = name
      localStorage.setItem('user', JSON.stringify(user))
      setName('')

      alert('Name changed successfully')
      navigate('/home')
    }
  }

  return (
    <form className="change-name-container" onSubmit={e => formSubmit(e)}>
      <span className='change-name-title'>Change your name</span>
      <TextField
        type="text"
        placeholder="Enter your new name..."
        value={name || ''}
        setValue={setName}
      />
      <button
        type="submit"
        className="submitBtn"
      >Submit</button>
    </form>
  )
}

export default ChangeName