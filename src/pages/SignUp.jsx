import React from 'react'
import AuthForm from '../components/AuthForm'
import homepage from '../assets/homepage.jpg'

const SignUp = () => {
    return (
        <div>
            <img className='py-2 m-0 absolute' src={homepage}></img>
            <AuthForm title='Sign Up' buttonText="Sign Up" bottomText="Already have an account?" isSignUp={true} ></AuthForm>
        </div>
    )
}

export default SignUp
