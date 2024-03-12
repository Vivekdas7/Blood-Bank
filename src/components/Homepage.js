import React from 'react';
import { Link } from "react-router-dom";
import h2 from '../images/h2.jpg';

export default function Homepage() {
  return (
    <div>

{/* //first homepage */}

      <div className='bg-[#378CE7]'>
        <div className="bg-[#378CE7] w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-between -mt-[0.5px]">
          <div className="space-y-8 my-16 lg:my-0">
            <h1 className="font-extrabold text-[90px] leading-[1.1] text-white mx-[-10px] mt-[-5%]">
                 eRaktKosh 
           
            </h1>
            <div className="w-6 h-1 bg-[#d04742] px-[30px]"></div>
            <p className="text-[18px] leading-7 text-white opacity-70 pb-6">
              Save lives through seamless blood management. Collect vital donations from generous donors. Distribute life-saving resources to healthcare providers. Never run dry on the gift of life.
            </p>
            <Link to='/register' className='mt-6'>
              <button className="bg-[#211C6A] active:scale-90 text-white py-[12px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200">Sign Up Now</button>
            </Link>
          </div>
          <img src="./Image.png" loading="lazy"
            className="w-full max-w-[680px]"
          />
        </div>

      </div>
      <svg className=" z-100 mr-[-1%] "
        viewBox="0 0 1446 199"
        focusable="false"
        classname="chakra-icon css-1w3t3sf"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M -6 68.5 V 0 H 1445 V 91 L 1289 170 L -6 68.5 Z"
          fill="#02042B"
        ></path>
      </svg>

{/* //2nd page */}

      <section className="mt-[10px] relative overflow-hidden">

        <img
          src="/Dots.png"
          alt="dots"
          loading="lazy"
          width="233"
          height="167"
          className="absolute -z-[100] -top-[8rem] left-[10rem] hidden md:inline-block "
        />
        <img
          src="/Dots.png"
          alt="dots"
          loading="lazy"
          width="233"
          height="167"
          className="absolute -z-[100] top-[3rem] right-0 rotate-180 hidden md:inline-block "
        />

        <div
          className="w-10/12 md:w-11/12 max-w-[1080px] mx-auto relative overflow-hidden pt-4"
        >

          <h2
            className="hidden md:block text-center text-3xl leading-[1.2] font-extrabold"
          >
            Make Successful Donations To Save Lives
          </h2>

          <h2
            className="inline-block text-center md:hidden text-[2.5rem] leading-[1.2] font-extrabold mx-auto"
          >
            Make Successful Donations To Save Lives
          </h2>
          <div className="w-6 h-1 bg-[#d04742] mx-auto mt-4 mb-6 md:mb-20"></div>

          <div
            className="w-full min-h-[520px] bg-white flex md:border border-gray-400 rounded-md relative p-4 md:p-10 py-12"
          >

            <img
              src="./Image.png" loading="lazy"
              className="bg-[#d04742] absolute right-2 top-12 w-12 h-12 rounded-full z-10 transition-all duration-200 drop-shadow-xl md:hidden"
            />

            <div
              className="absolute border-t-[6rem] border-l-[6rem] border-t-transparent border-l-white z-20 top-6 right-0 md:hidden"
            ></div>
            <div className="flex flex-col justify-between items-start w-full">
              <h3
                className=" text-xl md:leading-10 md:text-[28px] font-bold md:max-w-[500px] w-[320px]"
              >
                Why Should You Donate Your
                <span className="text-[#211C6A]"> Blood?</span>
              </h3>
              <div className="w-6 h-1 bg-[#211C6A] px-[30px]"></div>
              <ul className="space-y-2 my-6 md:my-0">
                <li className=" flex items-center space-x-2">

                  <span>Blood donation directly saves lives.</span>
                </li>
                <li className=" flex items-center space-x-2">

                  <span> Help your community and loved ones </span>
                </li>
                <li className=" flex items-center space-x-2">

                  <span>  Ensure a constant blood supply.</span>
                </li>
                <li className=" flex items-center space-x-2">

                  <span> Reduce your risk of health conditions. </span>
                </li>
                <li className=" flex items-center space-x-2">

                  <span> Feel good about making a difference. </span>
                </li>
                <li className=" flex items-center space-x-2">

                  <span>  One donation can save lives and renew naturally. </span>
                </li>
              </ul>
              <div
                className="w-full md:w-fit flex flex-col-reverse md:flex-row md:items-center md:space-x-4 gap-y-4 md:space-y-0"
              >
                <Link to='/register'
                  className="bg-[#211C6A] shadow-md active:scale-90 w-full md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200"
                >
                  Sign Up Now
                  <svg
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="w-[14px] h-[14px] ml-3"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                    ></path>
                  </svg>
                </Link>
                
                <div className=" items-center cursor-pointer group ">
                 <Link to='/Whydonate'    className="font-bold text-[#211C6A]  transition-all duration-200 ">
                  Learn More
                 </Link>
                </div>
              </div>
            </div>
            <img
              src={h2} loading="lazy"
              alt="payment suite"
              className="hidden md:block md:max-w-[400px] lg:max-w-[600px] absolute right-0 lg:top-0 bottom-0 mt-8 "
            />
          </div>

          <div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"
          >
          </div>
        </div>
      </section>
      <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

      <section className=''>
      <p className='text-[#211C6A] font-sans font-bold flex justify-center text-3xl mb-4'>LEARN ABOUT DONATION</p>
      
      <div className="flex justify-between items-center">
      {/* Left end: Image and Content */}
      <div className="w-1/2 p-4">
        <img src="https://eraktkosh.in/BLDAHIMS/bloodbank/transactions/assets/webp/donationFact.webp" alt="Image" className="w-auto h-auto  " />
        <div className="mt-4">
        
          <p className="text-l justify-center font-bold text-gray-600 m-9">After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</p>
       <button className='border bg-[#211C6A] text-white rounded m-6 p-2 mt-2 mx-64'>Donate Now</button>
        </div>
      </div>

      {/* Right end: Table */}

      <div className="w-1/2 p-4 ml-16 border border-gray-300 rounded-lg">
       <h1 className='mx-auto justify-center items-center flex font-bold mb-2 bg-[#378CE7] text-white py-4'>Compatible Blood Type Donors</h1>
        <table className="w-full table-auto  ">
        
          <thead>
            
            <tr>
              <th className="px-4 py-2 border">Blood Type</th>
              <th className="px-4 py-2 border">Donate Blood To</th>
              <th className="px-4 py-2 border">Receive Blood From</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            <tr>
              <td className="px-4 py-2 border">A+</td>
              <td className="px-4 py-2 border">A+ AB+</td>
              <td className="px-4 py-2 border">A+ A- O+ O-</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">O+</td>
              <td className="px-4 py-2 border">O+ A+ B+ AB+</td>
              <td className="px-4 py-2 border"> O+ O-</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">B+</td>
              <td className="px-4 py-2 border">B+ AB+</td>
              <td className="px-4 py-2 border">B+ B- O+ O-</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">AB+</td>
              <td className="px-4 py-2 border">AB+</td>
              <td className="px-4 py-2 border">Everyone</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">A-</td>
              <td className="px-4 py-2 border">A+ A- AB+ AB-</td>
              <td className="px-4 py-2 border">A- O-</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">0-</td>
              <td className="px-4 py-2 border">EVERYONE</td>
              <td className="px-4 py-2 border">O-</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">B-</td>
              <td className="px-4 py-2 border">B+ B- AB+ AB-</td>
              <td className="px-4 py-2 border">B- O-</td>
            </tr>

            <tr>
              <td className="px-4 py-2 border">AB-</td>
              <td className="px-4 py-2 border">AB+ AB-</td>
              <td className="px-4 py-2 border">AB- A- B- O-</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
      </section>




      

{/* \\third page */}

<div className='bg-[#378CE7] px-[100px] py-[130px] mt-6'>
<h1 className="font-bold text-[40px] text-center leading-[1.1] text-white mx-[-10px] mt-[-5%]">Find out if you're eligible to donate</h1>
<div className="w-6 h-1 bg-[#211C6A] ml-[590px] mt-4 px-[30px]"></div>
<div className=" justify-center -mx-12  text-white font-semibold text-[25px] mt-[90px]">

  <div className=''>
   
    <p className='mb-6 font-light mx-44 '>The questions we ask donors change regularly, so even if you’re a regular donor it’s worth checking.</p>
    <Link to='/Donorcheck' className='mt-3 '>
              <button className="bg-[#211C6A] mx-[570px]  active:scale-90 text-white py-[8px] px-[8px] rounded-md font-bold hover:bg-[#a42524] transition-all duration-200">Can I give blood ?</button>
            </Link>
 
  </div>
 
  
  
  
  {/* <div className='flex justify-end -my-24 -py-24'>
    <img src="https://cdn-icons-png.flaticon.com/128/4939/4939226.png" alt="" className='h-auto' />
  </div> */}
  
</div>
</div>

<section>
<h1 className='text-3xl mt-4 font-bold text-[#211C6A] mb-3 mx-5'>
BENEFITS OF BLOOD DONATION</h1>
<p className='font-sans text-gray-600 mx-5'>Donating Blood does not have any side effects on your health. In turn,there are several benefits of donating Blood.they are as follows:</p>
      <div className="flex justify-between mt-8 mb-12 mx-5">
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
</section>


<div className="flex justify-between mt-7 mb-7 mx-5">
      {/* Before Donation */}
      <div className="w-1/2 bg-[#211C6A] p-4 rounded-lg mr-4">
        <h2 className="text-xl font-bold mb-4 text-[#F0F3FF]">Before Donation</h2>
       <ul className='list-disc mx-4 font-sans space-y-1 text-white'>
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


<div className='bg-[#378CE7] px-[100px] py-[130px]'>
<h1 className=" text-[40px] text-center leading-[1.1] text-[#211C6A] mx-[-10px] mt-[-5%] font-bold font-sans">DONATION PROCESS</h1>
{/* <div className="w-6 h-1 bg-[#d04742] ml-[610px] mt-4 px-[30px]"></div> */}

<img src="https://www.ombloodcentre.com/images/separator.png" alt="My Image" className="max-w-full max-h-full flex justify-center items-center mx-auto  " />



<p className='text-white mx-auto flex justify-center items-center text-lg'>ENJOY THE FEELING OF ACCOMPLISHMENT KNOWING YOU ARE HELPING TO SAVE LIVES.</p>
<p className='text-white mx-auto flex justify-center text-sm items-center mt-3 '>In order to save a life you need to follow a simple 3 step procedure described below to ensure the recipient and donor safety.</p>

<div className="flex flex-wrap -mx-4 justify-around text-white font-semibold text-[25px] mt-[90px]">
  <div>
  <img src="https://www.ombloodcentre.com/images/gallery/8.jpg" alt="My Image" className="h-68 w-80  " />

  <h2 className ="text-[#211C6A] mb-1  mt-3 mx-3 font-sans font-bold">1. DONOR REGISTRATION</h2>
  <p className='w-[300px] text-[16px] font-light mt-2 flex justify-center items-center mx-7 text-white '>Each prospective blood donor should complete a donor questionnaire during registration to provide information such as individual's full name, date of birth, gender, body weight, contact details and medical history. The donor should be registered when they attend a blood donation session.
<br /> <br />
If you are subsequently not accepted for donation, then our councilor will inform you about pre- donation counseling and significance of the questions and the need for providing accurate information. All the personal information provided by you is confidential and shared in a personal space.</p>
  </div>
  <div>
  <img src="https://www.ombloodcentre.com/images/gallery/2.jpg" alt="My Image" className="h-68 w-80  " />
  <h2 className ="text-[#211C6A] mb-1  mt-3 mx-6 font-sans font-bold">2. DONOR SCREENING</h2>
  <p className='w-[300px] text-[16px] font-light mt-2 flex justify-center items-center mx-5 text-white'>There after filling the questionnaire form your Haemoglobin levels will be checked and if your haemoglobin is equal or above the minimum acceptance range then our medical officer will check the other parameters (i.e. temperature, blood pressure, pulse etc. and routine questions about your health and daily lifestyle). After that, if you are passed the screening criteria, then you are good to go for donating blood.</p>
  </div>
  <div>
  <img src="https://www.ombloodcentre.com/images/gallery/3.jpg" alt="My Image" className="h-68 w-80  " />
  <h2 className ="text-[#211C6A] mb-1  mt-3 mx-9 font-sans font-bold">3. DONATION</h2>
  <p className='w-[300px] text-[16px] font-light mt-2 flex justify-center items-center mx-7 text-white'>After completing the screening procedure successfully you will be advised to take some liquid and directed to blood donation area. Where our medical technologist will make you comfortable and tally the information written on the questionnaire format and clean your arm and insert a new, sterile needle into your vein. This takes just a few seconds, and it can feel like a quick pinch. The process should take less than 5 minutes and is over in seconds. When desired level whole blood has been collected, the donation is complete and a staff person will place a bandage on your arm. You'll leave after 10-15 minutes and continue your normal routine.</p>
  </div>
</div>
</div>




{/* fourth page */}

      <section className="pt-20 lg:pt-[100px] pb-10 lg:pb-20 bg-gray-200 px-40">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-3 shadow-lg">
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-10">
          
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        "
                    >
                      Blood Donation Camps
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                  We collaborate with colleges, corporates, RWAs to organize innovative and engaging blood donation camps end to end.
                  </p>
                  {/* <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-3
                     px-7
                     bg-[#d04742]
                     rounded-sm
                     text-white text-white
                     font-medium
                     hover:bg-[#a42524] transition-all duration-200
                     "
                  >
                    Organize a camp
                  </a> */}

<Link to='/organize' className='mt-6'>
              <button className=" inline-block
                     py-3
                     px-7
                     bg-[#211C6A]
                     rounded-sm
                     text-white text-white
                     font-medium
                     hover:bg-[#a42524] transition-all duration-200">Organize a camp</button>
            </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-3 shadow-lg">
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-10">
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                  <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        "
                    >
                      Handling Helpline
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                  Through helpline requests, we help address immediate blood requirements by patients.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-3
                     px-7
                     mt-6
                     bg-[#211C6A]
                     rounded-sm
                     text-white text-white
                     font-medium
                     hover:bg-[#a42524] transition-all duration-200
                     "
                  >
                    Find a Donor
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-3 shadow-lg">
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-10">
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                  <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        "
                    >
                      Awareness Session
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                  Street plays, competitions, and sessions - targeted at inspiring people, especially the first timers, to come out and donate blood.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-3
                     px-7
                     mt-6
                     bg-[#211C6A]
                     rounded-sm
                     text-white text-white
                     font-medium
                     hover:bg-[#a42524] transition-all duration-200
                     "
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}
