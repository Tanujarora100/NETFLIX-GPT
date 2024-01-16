import React from 'react';

const LoginForm = () => {
    return (
        <form className='h-[660px] absolute p-12 bg-gradient-to-b from-gray-800 via-transparent to-black w-3/12 flex flex-col items-center justify-center mx-auto right-0 left-0 py-12 mt-[250px]'>
            <input type='text' placeholder='Email Address' className='p-2 m-2 w-full max-w-[314px] h-12 bg-[#e8f0fe]' />
            <input type='password' placeholder='Password' className='p-2 m-2 w-full max-w-[314px] h-12' />
            <button className='text-white p-4 m-4 bg-gradient via bg-[#e50914] w-full max-w-[314px] h-12 flex items-center justify-center font-bold'>
                <p className='pb-4 py-4'>Sign In</p>
            </button>
        </form>
    );
};

export default LoginForm;
