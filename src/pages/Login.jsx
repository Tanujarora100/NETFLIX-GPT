import React from 'react'
import homepage from "../assets/homepage.jpg"
import AuthForm from '../components/AuthForm'
const Login = () => {
    return (
        <div>
            {/* <h1> LOGIN SCREEN</h1> */}
            <img className='py-2 m-0 absolute' src={homepage}></img>

            <AuthForm title="Sign In" buttonText="Sign In" bottomText="New to Netflix?" isSignUp={false}></AuthForm>
            

        </div>
    )
}

export default Login
