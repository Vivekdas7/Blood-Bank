import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Mycards from './Mycards'

export default function Find() {
  return (
  <div className='bg-gray-200 mb-1 pb-5'>
    <h1 className=' bg-gray-200 p-4 h-max w-full text-4xl font-bold text-[#d04742] text-center'>Upcoming Events </h1>
<Marquee >
<Mycards/>
</Marquee>
</div>
    
  );
}
