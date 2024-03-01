import React from 'react'
import FormLayoutLogin from './FormLayoutLogin'
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <h2 style={{textAlign: 'center'}}>Login</h2>
        <FormLayoutLogin />
    </div>
  )
}

export default Login