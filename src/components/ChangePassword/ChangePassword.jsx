import { useState, useEffect } from 'react'
import { VerifyAnswer, UpdatePassword } from '../../utils/ForgotPasswordUtils'
import { useNavigate } from 'react-router-dom'
import './ChangePassword.css'

const ChangePassword = () => {

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [inValidAnswer, setInvalidAnswer] = useState(false)
  const [allowNewPassword, setAllowNewPassword] = useState(false)
  const [token, setToken] = useState('')

  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('auth-token') || !localStorage.getItem('user')) {
      localStorage.removeItem('auth-token')
      localStorage.removeItem('user')
      alert('You need to be logged in to access this page')
      navigate('/login')
    }

    const getSecurityQuestion = async () => {
      let user = localStorage.getItem('user')
      user = JSON.parse(user)
      let response
      try {
        setIsLoading(true)
        response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/forgotPassword/user/${user.email}`, {
          method: 'GET'
        })
      } catch (ex) {
        alert('Cannot connect to the server right now. Please try again later')
        return
      }
      const result = await response.json()
      setQuestion(result.securityQuestion)
      setIsLoading(false)
    }

    getSecurityQuestion()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <form className='answer-container' onSubmit={e => e.preventDefault()}>
        {isLoading ?
          <span>Loading...</span>
          :
          <>
            {!allowNewPassword ?
              <>
                <span className='change-pw-title'>Security Question</span>
                <VerifyAnswer
                  question={question}
                  answer={answer}
                  setAnswer={setAnswer}
                  inValidAnswer={inValidAnswer}
                  setInvalidAnswer={setInvalidAnswer}
                  email={(JSON.parse(localStorage.getItem('user'))).email}
                  setToken={setToken}
                  setAllowNewPassword={setAllowNewPassword}
                />
              </>
              :
              <>
                <span className='change-pw-title'>Change Password</span>
                <UpdatePassword
                  token={token}
                  newPassword={newPassword}
                  setNewPassword={setNewPassword}
                  confirmNewPassword={confirmNewPassword}
                  setConfirmNewPassword={setConfirmNewPassword}
                />
              </>
            }
          </>
        }
      </form>
    </>
  )
}

export default ChangePassword