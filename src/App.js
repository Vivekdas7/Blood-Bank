import React, { useState } from 'react'
import './App.css';
import './Toggle.css';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import MydonorInfo from './components/MydonorInfo';
import PostDonor from './components/PostDonor';
import PostHospital from './components/PostHospital';
import Find from './components/Find';
import Event from './components/Event'
import Donorcheck from './components/Donorcheck'
import ThreeButtonsSection from './components/Faqs';
import Whydonate from './components/Whydonate';
import Organize from './components/Organize';
import MapWithInput from './components/MapWithInput';








function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor-info" element={<MydonorInfo />} />
        <Route path="/post-donor" element={<PostDonor/>} />
        <Route path="/post-hospital" element={<PostHospital/>} />
        <Route path="/organize" element={<Organize/>} />
        <Route path="/faqs" element={<ThreeButtonsSection/>} />
        <Route path="/whydonate" element={<Whydonate/>} />
        <Route path="/donorcheck" element={<Donorcheck/>} />
        <Route path="/mapwithinput" element={<MapWithInput/>} />
      </Routes>
      <Find/>
      <Event/>
    
 
      <Footer />

    </div>
  );
}

export default App;