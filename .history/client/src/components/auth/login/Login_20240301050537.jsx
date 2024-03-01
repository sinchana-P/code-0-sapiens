import React from 'react'
import FormLayoutLogin from './FormLayoutLogin'
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <h2>Login</h2>
        <div>
        <FormLayoutLogin />
        </div>
    </div>
  )
}

export default Login