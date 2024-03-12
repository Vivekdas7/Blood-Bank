import React from 'react'
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div>
<div className="bg-[#378CE7]">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3 color-red"> TOGETHER, LIFE FLOWS FROM HERE </h3>
            <h1 className='w-full text-6xl font-bold text-[#211C6A]'>eRaktKosh</h1>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0 text-gray-800"> &copy; 2024 eRaktKosh - All Rights Reserved</p>
            <div className="order-1 md:order-2">
                <Link to='' name='about' className="px-2 text-gray-700">About us</Link>
                <Link to='' name='contact' className="px-2 border-l text-gray-800">Contact us</Link>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
