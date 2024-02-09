import React, { useState } from 'react';

export default function Find() {
  const [searchQuery, setSearchQuery] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  
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
  ];

  const filteredDonorCenters = donorCenters.filter(center =>
    center.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (bloodGroup ? center.bloodGroup === bloodGroup : true)
  );

  const bloodGroups = [...new Set(donorCenters.map(center => center.bloodGroup))];

  return (
    <div className="min-h-screen bg-gray-200 text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#d04742]">Find A Donor Center Near You</h1>
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

        {filteredDonorCenters.map((center, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg mb-4 p-4 shadow-md">
            <h2 className="text-lg font-semibold text-[#d04742]">{center.name}</h2>
            <p className="text-sm mt-1">{center.address}</p>
            <p className="text-sm">{center.phone}</p>
            <p className="text-sm">{center.email}</p>
          </div>
        ))}

        {filteredDonorCenters.length === 0 && (
          <div className="text-center mt-8">
            <p>No donor centers found. Try adjusting your search criteria.</p>
          </div>
        )}

        <div className='text-center'>
          <button className="bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-4">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
