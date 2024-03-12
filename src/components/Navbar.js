import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-[#378CE7] flex justify-between text-white items-center h-24 w-[100vw] px-4'>
            <h1 className='text-6xl font-bold text-[#F9E8D9] p-4 transform transition duration-300 hover:scale-105 cursor-pointer font-serif'>BloodBond</h1>
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
                        About Us
                    </ScrollLink>
                </li>
                <li className='p-6 text-xl border-b-4 border-transparent hover:border-[#d04742] duration-200 cursor-pointer'>
    <Link to="/Faqs" smooth={true} duration={500} className='transition duration-300 hover:scale-110'>
                       FAQs
                    </Link>
                </li>
                <li className='p-6 text-xl border-b-4 border-transparent hover:border-[#d04742] duration-200 cursor-pointer'>
                    <Link to="/Whydonate" smooth={true} duration={500} className='transition duration-300 hover:scale-110'>
                        Why Donate?
                    </Link>
                    
                </li>
                <li className='p-3 text-xl border-b-3 m-3 mx-5 border-transparent hover:border-[#211C6A] duration-200 cursor-pointer bg-white rounded text-[#02042b] font-bold'>
                    <ScrollLink to="contact" smooth={true} duration={500} className='transition duration-300 hover:scale-110'>
                        DONATE NOW
                    </ScrollLink>
                    
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
