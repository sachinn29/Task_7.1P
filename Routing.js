import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home';
import Login from './Login';
import Signup from './Signup';


function Routing() {
  

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default Routing;
