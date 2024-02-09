import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-[#02042b] flex justify-between text-white items-center h-24 w-[100vw] px-4'>
            <h1 className='text-6xl font-bold text-[#d04742] p-4 transform transition duration-300 hover:scale-105 cursor-pointer'>BloodLink Pro</h1>
            <ul className='flex pr-16'>
                <li className='p-6 text-xl border-b-4 border-transparent hover:border-[#d04742] duration-200 cursor-pointer'>
                    <Link to="/" className='transition duration-300 hover:scale-110'>
                        Home
                    </Link>
                </li>

                <li className='p-6 text-xl border-b-4 border-transparent hover:border-[#d04742] duration-200 cursor-pointer'>
                    <Link to="/register" className='transition duration-300 hover:scale-110'>
                        Register
                    </Link>
                </li>
                <li className='p-6 text-xl border-b-4 border-transparent hover:border-[#d04742] duration-200 cursor-pointer'>
                    <ScrollLink to="about" smooth={true} duration={500} className='transition duration-300 hover:scale-110'>
                        About
                    </ScrollLink>
                </li>
                <li className='p-6 text-xl border-b-4 border-transparent hover:border-[#d04742] duration-200 cursor-pointer'>
                    <ScrollLink to="contact" smooth={true} duration={500} className='transition duration-300 hover:scale-110'>
                        Contact
                    </ScrollLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
