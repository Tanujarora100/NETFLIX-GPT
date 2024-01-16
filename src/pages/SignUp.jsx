import React from 'react'
import { SignUpForm } from '../components/LoginForm'

const SignUp = () => {
    return (
        <div>
            <img className='py-2 m-0 absolute' src={homepage}></img>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default SignUp
