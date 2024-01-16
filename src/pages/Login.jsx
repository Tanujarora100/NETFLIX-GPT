import React from 'react'
import homepage from "../assets/homepage.jpg"
import LoginForm from '../components/LoginForm'
const Login = () => {
  return (
    <div>
      {/* <h1> LOGIN SCREEN</h1> */}
      <img  className='py-2 m-0 absolute' src={homepage}></img>
     
      <LoginForm></LoginForm>
     
    </div>
  )
}

export default Login
