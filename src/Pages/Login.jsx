import React from 'react'
import LoginImg from '../assets/Login.png'
import Tamplate from '../Components/Tamplate'
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Tamplate
        title='Welcome Back'
        desc1='Build Skills for today, tomorrow, and beyond.'
        desc2='Education to future-proof your career.'
        image={LoginImg}
        formtype='login'
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login