import React, { useState } from 'react';
import { checkValidData } from '../validations/LoginValidation';
import {useNavigate} from "react-router-dom"
import { useRef } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../config/fireBaseConfig';
import { goToHomePage, goToBrowsePage, goToSignUpPage } from '../utils/navigationUtils';
const AuthForm = ({ title, buttonText, bottomText, isSignUp }) => {

    const [signUp, setSignUp] = useState(isSignUp);
    const [errorMessage, setErrorMessage] = useState("");

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setSignUp(prevSignUp => !prevSignUp);

    }
   

    const handleOnClickForm = () => {
        const { value: emailValue } = email.current;
        const { value: passwordValue } = password.current;

        const validData = signUp ? checkValidData(emailValue, passwordValue, null) : checkValidData(emailValue, passwordValue, null);
        console.log(validData);
        setErrorMessage(validData);
        if (validData && signUp) {
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn(errorCode + errorMessage);
                    setErrorMessage(errorMessage);

                });
            // goToHomePage();
        }
        else if (validData) {
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    console.log("User Getting Signed in ")
                    // jumpToBrowse();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // goToHomePage();
                });

        }
    }

    const formType = signUp ? "Sign Up" : "Sign In";

    return (
        <form onSubmit={(e) => e.preventDefault()} id='1' className='h-[660px] absolute p-8 bg-gradient-to-b from-gray-800 via-transparent to-black w-3/12 flex flex-col items-center justify-center mx-auto right-0 left-0 top-0 mt-[220px] box-border'>
            <h1 className='text-white font-bold block m-8 text-4xl pb-0 '>{formType}</h1>
            <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 w-full max-w-[314px] h-[50px] text-white bg-gray-700' />
            <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full max-w-[314px] h-[50px] text-white bg-gray-700' />
            <p className='text-red-500 font-semibold py-1 text-md'>{errorMessage}</p>
            {signUp ? (
                <>
                    <input type='text' placeholder='Full Name' className='p-2 m-2 w-full max-w-[314px] h-[50px] text-white bg-gray-700' />
                    <input ref={name} type='text' placeholder='Username' className='p-2 m-2 w-full max-w-[314px] h-[50px] text-white bg-gray-700' />
                </>
            ) : null}

            <div className="m-2 text-[#b3b3b3] text-[16px] flex items-center">
                <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    className="mr-2 transform scale-75 sm:scale-100 md:scale-75 lg:scale-50 xl:scale-50"
                />
                <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button onClick={handleOnClickForm} className='text-white p-4 m-2 bg-gradient via bg-[#e50914] w-full max-w-[314px] h-12 flex items-center justify-center font-bold rounded'>
                <p className='pb-4 py-4 text-[16px]'>{buttonText}</p>
            </button>

            <button className='text-white p-8' onClick={toggleSignInForm} {...signUp ? { onClick: goToHomePage } : { onClick: goToSignUpPage }} >{bottomText}</button>
        </form>
    );
};

export default AuthForm;
