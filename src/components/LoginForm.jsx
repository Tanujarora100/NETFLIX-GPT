import React, { useState } from 'react';

export const SignInForm = () => {
    return (
        <><AuthForm title="Sign In" buttonText="Sign In" bottomText="New to NetFlix?" isSignup="false" /></>
    )
}

export const SignUpForm = () => {
    return (
        <><AuthForm title="Sign Up" buttonText="Sign Up" bottomText="Already have an account?" isSignup="true" /></>
    )
}



const AuthForm = ({ title, buttonText, bottomText, isSignInForm }) => {

    const [signUp, setSignUp] = useState(false);
    const formType = isSignInForm === true ? "Sign In" : "Sign Up";
    const toggleSignInForm = () => {
        setSignUp(!signUp);
    }

    return (
        <form className='h-[660px] absolute p-8 bg-gradient-to-b from-gray-800 via-transparent to-black w-3/12 flex flex-col items-center justify-center mx-auto right-0 left-0 top-0 mt-[220px]'>
            <h1 className='text-white font-bold block m-8 text-4xl pb-0 '>{formType}</h1>
            <input type='text' placeholder='Email Address' className='p-2 m-2 w-full max-w-[314px] h-[50px] bg-gray-700' />
            <input type='password' placeholder='Password' className='p-2 m-2 w-full max-w-[314px] h-[50px] bg-gray-700' />

            {signUp === true ? (
                <>
                    <input type='text' placeholder='Full Name' className='p-2 m-2 w-full max-w-[314px] h-[50px] bg-gray-700' />
                    <input type='text' placeholder='Username' className='p-2 m-2 w-full max-w-[314px] h-[50px] bg-gray-700' />
                </>
            ) : null}

            <div className='m-2 text-[#b3b3b3] text-[13px] flex ml-[-205px]'>
                <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2 transform scale-75 sm:scale-100 md:scale-75 lg:scale-50 xl:scale-50" />
                <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button className='text-white p-4 m-2 bg-gradient via bg-[#e50914] w-full max-w-[314px] h-12 flex items-center justify-center font-bold rounded'>
                <p className='pb-4 py-4 text-[16px]' >{buttonText}</p>
            </button>

            <button className='text-white p-8' onClick={() => toggleSignInForm(!signUp)}>{bottomText}</button>
        </form>
    );
};

export default AuthForm;
