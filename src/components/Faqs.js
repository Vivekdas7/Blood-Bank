import React, { useState } from 'react';
import Toggle from './Toggle';

const ThreeButtonsSection = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleButtonClick = (contentNumber) => {
    setActiveContent(contentNumber);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#378CE7]  ">
      <div className="flex justify-center mt-36 mb-35">
        <button
          className={`mx-2 py-2 px-4 bg-white hover:bg-blue-700 text-[#8A0603] font-bold`}
          onClick={() => handleButtonClick(1)}
        >
          FAQs
        </button>
        <button
          className={`mx-7 py-2 px-4 bg-white hover:bg-blue-700 text-[#8A0603] font-bold`}
          onClick={() => handleButtonClick(2)}
        >
          DONATION FACTS
        </button>
        <button
          className={`mx-2 py-2 px-4 bg-white hover:bg-blue-700 text-[#8A0603] font-bold`}
          onClick={() => handleButtonClick(3)}
        >
          WHO CAN DONATE?
        </button>
      </div>

      <div className={`mt-8 mb-10 ${activeContent ? 'block' : 'hidden'}`}>
        {activeContent === 1 && (
          <div className="h-screen w-screen bg-[#378CE7]  items-center justify-center text-black">
            <p className='font-semibold flex justify-center text-5xl font-sans'>FREQUENTLY ASKED QUESTIONS</p>
            <p className='m-16  text-2xl font-sans font-light'>Our donors have requested a FAQs (Frequently Asked Questions) page with answers concerning many aspects of blood donation and the Central California Blood Center. In response to that request we have compiled a set of questions and answers. Feel free to call and ask our staff for more information on any of these topics.</p>
            <Toggle/>
          </div>
        )}
        {activeContent === 2 && (
          <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
            <p>Content for Button 2</p>
          </div>
        )}
        {activeContent === 3 && (
          <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
            <p>Content for Button 3</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeButtonsSection;
