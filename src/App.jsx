import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/utils/Navbar/Navbar";
import HomePage from "../src/pages/Home/HomePage";
import BottomNavigation from "../src/utils/BottomNavigation/BottomNavigation";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <BottomNavigation/>
    </>
  );
}

export default App;
