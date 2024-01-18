import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className='absolute px-8 py-2 pl-3 bg-gradient-to-b from-black z-10 top-0 w-full flex items-center justify-between'>
            <img className='w-40 ' src={logo} alt="Logo" />
        </div>
    );
}

export default Header;
