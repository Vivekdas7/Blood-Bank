import React, { useState } from 'react';

export default function Find() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [visibleDonorCenters, setVisibleDonorCenters] = useState(3); // State to control the number of visible donor centers
  
  const donorCenters = [
    {
      name: "Apollo Hospitals in Chennai",
      address: "123 Health St, Chennai",
      phone: "(123) 456-7890",
      email: "info@apollochennai.com",
      bloodGroup: "A+",
    },
    {
      name: "City General Hospital",
      address: "123 Health St, City",
      phone: "(123) 456-7890",
      email: "info@citygeneral.com",
      bloodGroup: "B-",
    },
    {
      name: "Kolkata Medical Center",
      address: "456 Care St, Kolkata",
      phone: "(456) 789-0123",
      email: "info@kolkatamedical.com",
      bloodGroup: "O+",
    },
    {
      name: "Kolkata Health Hospital",
      address: "789 Cure St, Kolkata",
      phone: "(789) 012-3456",
      email: "info@kolkatahealth.com",
      bloodGroup: "AB-",
    },
    {
      name: "Hope Medical Center",
      address: "567 Hope Ave, Kolkata",
      phone: "(456) 789-0123",
      email: "info@hopemedical.com",
      bloodGroup: "B+",
    },
    
    {
      name: "Royal Hospital Kolkata",
      address: "1 Royal Road, Kolkata",
      phone: "(123) 456-7890",
      email: "info@royalkolkata.com",
      bloodGroup: "A+",
    },
    {
      name: "BataNagar Hospital Kolkata",
      address: "1 Royal Road, Kolkata",
      phone: "(123) 456-7890",
      email: "info@royalkolkata.com",
      bloodGroup: "A+",
    },
    {
      name: "Jims Hospital Kolkata",
      address: "1 Royal Road, Kolkata",
      phone: "(123) 456-7890",
      email: "info@royalkolkata.com",
      bloodGroup: "B+",
    },
    {
      name: "Bengal Hospital Kolkata",
      address: "1 Royal Road, Kolkata",
      phone: "(123) 456-7890",
      email: "info@royalkolkata.com",
      bloodGroup: "AB+",
    },
    {
      name: "ITC Hospital Kolkata",
      address: "1 Royal Road, Kolkata",
      phone: "(123) 456-7890",
      email: "info@royalkolkata.com",
      bloodGroup: "O+",
    },
    // Add more hospitals here
  ];

  const filteredDonorCenters = donorCenters.filter(center =>
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (bloodGroup ? center.bloodGroup === bloodGroup : true)
  );

  const bloodGroups = [...new Set(donorCenters.map(center => center.bloodGroup))];

  const handleLoadMore = () => {
    setVisibleDonorCenters(prevVisibleDonorCenters => prevVisibleDonorCenters + 3); // Increase the number of visible donor centers by 3
  };

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#211C6A]">Find A Donor Center Near You</h1>
          <p className="text-lg mt-2">Search for donor centers in your area</p>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          <div className="relative">
            <input
              type="text"
              className="block w-72 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 bg-white text-gray-800"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
          <div className="relative">
            <select
              className="block w-44 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 bg-white text-gray-800"
              value={bloodGroup}
              onChange={e => setBloodGroup(e.target.value)}
            >
              <option value="">All Blood Groups</option>
              {bloodGroups.map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>

        <div className="mb-8">
          {filteredDonorCenters.slice(0, visibleDonorCenters).map((center, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg mb-4 p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#d04742]">{center.name}</h2>
              <p className="text-sm mt-1">{center.address}</p>
              <p className="text-sm">{center.phone}</p>
              <p className="text-sm">{center.email}</p>
            </div>
          ))}
        </div>

        {filteredDonorCenters.length > visibleDonorCenters && (
          <div className="text-center mt-8">
            <button onClick={handleLoadMore} className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-4">
              Load More
            </button>
          </div>
        )}

        {filteredDonorCenters.length === 0 && (
          <div className="text-center mt-8">
            <p>No donor centers found. Try adjusting your search criteria.</p>
          </div>
        )}

      </div>
      <p className='text-5xl mb-16 font-bold flex justify-center mt-4 '>OKAY, WHERE CAN I DONATE?</p>
      <div className="flex h-screen">
        {/* Left half with map iframe */}
        <div className="w-1/2 h-full border-r mt-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58978.52898432794!2d88.15162264863282!3d22.498252099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027c161529ec1d%3A0x6830fc6bb9bc4b59!2sMatrisadan%20Municipality%20Hospital!5e0!3m2!1sen!2sin!4v1708453974011!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Map"
            width="100%"
            height="80%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* Right half with search input */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="bg-[#211C6A] p-6 m-32 py-12 mt-[-24px]">
            <h1 className="text-xl font-bold mb-4 text-white flex justify-center">ENTER YOUR ZIP CODE</h1>
            <div className="flex items-center border border-gray-300 rounded-lg bg-white px-4 py-2 shadow-md">
              <input
                type="text"
                placeholder="e.g. 700141"
                className="flex-1 px-4 py-2 border-none focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4">
                FIND LOCATIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
