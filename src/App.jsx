import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/utils/Navbar/Navbar";
import HomePage from "../src/pages/Home/HomePage";
import BottomNavigation from "../src/utils/BottomNavigation/BottomNavigation";
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={ <LoginPage/>}/>
      </Routes>
      <BottomNavigation/>
    </>
  );
}

export default App;
