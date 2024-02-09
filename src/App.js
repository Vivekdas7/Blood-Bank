import React, { useState } from 'react'
import './App.css';
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
      </Routes>
      <Find/>
      <Event/>
    
 
      <Footer />

    </div>
  );
}

export default App;