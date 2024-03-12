import React from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link } from 'react-router-dom';

const handleClick = () => {
  // Handle click event here
};

function organize() {
    return (
      <div className="bg-maroon text-white text-8xl font-bold py-8 px-4 h-full bg-[#8A0603] text-center">
      WANNA SAVE <br /> SOMEONE'S LIFE?
      <h1 className='text-5xl mt-4 font-light'>You’re in the right place!</h1>
      <button onClick={handleClick} className="bg-white  text-[#8A0603]  py-2 px-4 p-6  mt-5 text-5xl font-bold">
      DONATE NOW
    </button>
<div className='flex items-center mt-16'>
<img src="https://www.bloodconnect.org/img/organize-a-camp/OrgACamp-2.JPG" alt="Your Image" className="mr-4 w-96 h-72 mt-16 flex items-center" />
<div>
<h2 className="text-5xl text-gray-900 ">What are Blood Donation Camps</h2>
        <p className="text-white text-2xl font-light m-12 text-left">Rather than going to the hospital to donate blood, we bring the hospital to you. We partner with government recognized blood banks who bring their expert doctors and staff to conduct a clean blood donation camp without any hassles. The camp can be organized in a common area or in a blood donation bus which we can bring. We make all the other arrangements, you just have to provide a ventilated clean area.Now saving lives does not need any travel even, just 20minutes at the camp!</p>
</div>
    
</div>
   
    </div>

    
    );
}

export default organize;
