import { useEffect, useState } from 'react'
import Form from './Form'
import './style/loginScreen.css'
import UserLogged from './UserLogged'

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changeToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(changeToken)
  }, [changeToken])

  return (
    <div className='login'>
      {
        token ?
          <UserLogged/>
        :
          <Form/>
      }
    </div>
  )
}

export default LoginScreen