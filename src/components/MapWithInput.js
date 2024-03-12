import React from 'react';

function MapWithInput() {
  return (
    <div className="map-container">
      {/* Google Maps iframe taking half of the screen horizontally */}
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58978.52898432794!2d88.15162264863282!3d22.498252099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027c161529ec1d%3A0x6830fc6bb9bc4b59!2sMatrisadan%20Municipality%20Hospital!5e0!3m2!1sen!2sin!4v1708453974011!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* Floating input box on the right side */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your zip code"
          style={{ paddingLeft: '20px' }} // Add padding to the left side
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
          Find Location
        </button>
      </div>
    </div>
  );
}

export default MapWithInput;