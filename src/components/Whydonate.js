import React from 'react';

function Whydonate() {
    return (
        <div className="bg-maroon text-white   py-8 px-8 h-full bg-[#ffff]  ">
        <h1 className='text-3xl mb-8 font-bold text-[#211C6A] '>We are commited to...</h1>
      <ul className='list-disc font-sans space-y-4 text-gray-600'>
        <li>Ensure timely availability of safe blood.</li>
        <li>Promote voluntary Blood Donation</li>
        <li>Provide free blood to thalassemia, sickle cell anemia and hemophilia patients & needy patients from below the poverty line</li>
        <li>Network with hospitals, NGO’s, Educational Institutions, NSS, Public & Private Institutions</li>
        <li>Offers quality, FREE blood units to poor patients and Thalassemia victims and to others in need.</li>


      </ul>

      <h1 className='text-3xl mt-8 font-bold text-[#211C6A] mb-5'>WHO CAN/CAN'T DONATE BLOOD</h1>
      <p className='text-gray-600'>Donating blood may reduce the risk of heart disease for men and stimulate the generation of red blood cells.</p>
      <h1 className='text-3xl mt-8 font-bold text-[#211C6A] mb-5'>LET OTHERS BENEFIT FROM FROM YOUR GOOD HEALTH.</h1>
      <h1 className='text-3xl mt-8 font-bold text-[#211C6A] mb-5'>DO DONATE BLOOD IF.....</h1>
      <ul className='list-disc space-y-4 font-sans text-gray-600 '>
        <li>Your are between age group 18-60 years.</li>
        <li>Your weight is 45 kgs or more.</li>
        <li>Your hemoglobin is 12.5gm/dl.</li>
        <li>Your last blood donation was 3 months earlier.</li>
        <li>You should be healthy and have not suffered from malaria, typhoid or other transmissible disease in the recent past.</li>
      
      </ul>
      <h1 className='text-3xl mt-8 font-bold text-[#211C6A] mb-5'>DO NOT DONATE BLOOD IF.....</h1>
      <ul className='list-disc space-y-4 font-sans text-gray-600 '>
        <li>Cold/fever in the past 1 week.</li>
        <li>Under treatment with antibiotics or any other medications.</li>
        <li>Cardiac problems, hypertension, epilepsy,diabetes (on insulin therapy),history of cancer,chronic kidney or liver disease,bleeding tendencies,venereal disease etc.</li>
        <li>Major surgery in the last 12 months.</li>
        <li>Vaccination in the last 28 days.</li>
        <li>Had fainting attacks during last donation.</li>
        <li>Have regularly received treatment with blood products.</li>
      
      </ul>

      <h1 className='text-3xl mt-8 font-bold text-[#211C6A] mb-5'>WOMEN</h1>
      <ul className='list-disc space-y-4 font-sans text-gray-600 '>
        <li>Female should not donate blood during pregnancy.</li>
        <li>Had a miscarriage in the last 6 months or have been pregnant / lactating in the last one year.</li>
        <li>Female can donate after 6 weeks following a normal delivery and when they are not breast feeding.</li>
        <li>Female should not donate blood if they are having heavy menstrual flow or menstural cramps.</li>
        
      
      </ul>
      <h1 className='text-3xl mt-12 font-bold text-[#211C6A] mb-5'>
BENEFITS OF BLOOD DONATION</h1>
<p className='font-sans text-gray-600'>Donating Blood does not have any side effects on your health. In turn,there are several benefits of donating Blood.they are as follows:</p>
      <div className="flex justify-between mt-12">
      {/* Container 1 */}
      <div className="w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
        <div className="mb-4">
         
        </div>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/7418/7418059.png" alt="Logo" className="w-16 mx-auto mb-4 " />
        </div>
        <div className="text-center text-gray-700 font-semibold">
          <p>Reduce the chance of heart disease</p>
        </div>
      </div>

      {/* Container 2 */}
      <div className="w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
        <div className="mb-4">
        
        </div>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/10475/10475926.png" alt="Logo" className="w-16 mx-auto mb-4" />
        </div>
        <div className="text-center text-gray-700 font-semibold">
          <p>Enhance the production of new red Blood Cells, Burns Calories</p>
        </div>
      </div>

      {/* Container 3 */}
      <div className="w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
        <div className="mb-4">
         
        </div>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/2854/2854169.png" alt="Logo" className="w-16 mx-auto mb-4" />
        </div>
        <div className="text-center text-gray-700 font-semibold">
          <p>Uncover Potential Health Problems</p>
        </div>
      </div>

      {/* Container 4 */}
      <div className="w-1/4 bg-gray-200 p-4 rounded-lg">
        <div className="mb-4">
        
        </div>
        <div className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/128/8730/8730535.png" alt="Logo" className="w-16 mx-auto mb-4" />
        </div>
        <div className="text-center text-gray-700 font-semibold">
          <p>Give you a sense of Significance</p>
        </div>
      </div>
    </div>

    <div className="flex justify-between mt-7">
      {/* Before Donation */}
      <div className="w-1/2 bg-[#d93333] p-4 rounded-lg mr-4">
        <h2 className="text-xl font-bold mb-4">Before Donation</h2>
       <ul className='list-disc mx-4 font-sans space-y-1'>
        <li>Have a sumptuous meal</li>
        <li>Avoid fatty foods</li>
        <li>Get a good night's sleep</li>
        <li>Drink a lot of water</li>
        <li>
        Avoid Alcohol and Smoking
        </li>
       </ul>
      </div>

      {/* After Donation */}
      <div className="w-1/2 bg-[#FFE0AA] p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-[#d93333]">After Donation</h2>
        <ul className='list-disc mx-4 font-sans text-gray-600 space-y-1'>
        <li>Drink plenty of fluids for the next 24-48 hrs</li>
        <li>Avoid strenuous physical activities</li>
        <li>If you feel light headed,take rest</li>
        <li>Enjoy the good feeling that you may have saved 4 lives by donating blood</li>
        
       </ul>
      </div>
    </div>


  </div>
     
     

    );
}

export default Whydonate;