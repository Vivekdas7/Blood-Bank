import React from 'react';
import { Link } from 'react-router-dom';

export default function Mycards() {
  return (
    <div className='flex items-center justify-center'>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md m-3 p-6 text-gray-800">
            <h2 className="text-lg font-semibold mb-2">Event 1</h2>
            <p className="text-gray-700">Join us for our blood donation event at <span className="font-semibold">Community Center</span>.</p>
            <p className="text-gray-700">Date: <span className="font-semibold">January 15, 2025</span></p>
            <p className="text-gray-700">Time: <span className="font-semibold">10:00 AM - 4:00 PM</span></p>
            <p className="text-gray-700">Address: <span className="font-semibold">123 Main Street, Cityville</span></p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Register</button>
          </div>
          <div className="bg-white rounded-lg shadow-md m-3 p-6 text-gray-800">
            <h2 className="text-lg font-semibold mb-2">Event 2</h2>
            <p className="text-gray-700">Donate blood and save lives at our upcoming event hosted at <span className="font-semibold">City Hospital</span>.</p>
            <p className="text-gray-700">Date: <span className="font-semibold">February 10, 2025</span></p>
            <p className="text-gray-700">Time: <span className="font-semibold">9:00 AM - 3:00 PM</span></p>
            <p className="text-gray-700">Address: <span className="font-semibold">456 Oak Street, Townsville</span></p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Register</button>
          </div>
          <div className="bg-white rounded-lg shadow-md m-3 p-6 text-gray-800">
            <h2 className="text-lg font-semibold mb-2">Event 3</h2>
            <p className="text-gray-700">Donate blood and save lives at our upcoming event hosted at <span className="font-semibold">Red Cross Center</span>.</p>
            <p className="text-gray-700">Date: <span className="font-semibold">March 20, 2025</span></p>
            <p className="text-gray-700">Time: <span className="font-semibold">11:00 AM - 5:00 PM</span></p>
            <p className="text-gray-700">Address: <span className="font-semibold">789 Maple Avenue, Villagetown</span></p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
