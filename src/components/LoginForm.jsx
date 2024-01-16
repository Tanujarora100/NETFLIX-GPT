import React from 'react';

const LoginForm = () => {
    return (
        <form className='h-[660px] absolute p-8  bg-gradient-to-b from-gray-800 via-transparent to-black w-3/12 flex flex-col items-center justify-center mx-auto right-0 left-0 top-0 mt-[220px]'>
            <h1 className='text-white font-bold block m-8 ml-[-160px] text-4xl pb-0  '>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-2 m-2 w-full max-w-[314px] h-[50px] bg-gray-700' />
            <input type='password' placeholder='Password' className='p-2 m-2 w-full max-w-[314px] h-[50px] bg-gray-700' />
            <div className='ml-[-200px] pb-1 pt-[-10px]'>
                <label className="flex m-2 text-[#b3b3b3] text-[13px]">
                    <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2 ml-[-8px]" />
                    Remember Me
                </label>
            </div>
            <button className='text-white p-4 m-2 bg-gradient via bg-[#e50914] w-full max-w-[314px] h-12 flex items-center justify-center font-bold rounded'>
                <p className='pb-4 py-4 text-[16px] '>Sign In</p>
            </button>
        </form>
    );
};

export default LoginForm;
