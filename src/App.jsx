import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/utils/Navbar/Navbar";
import HomePage from "../src/pages/Home/HomePage";
import BottomNavigation from "../src/utils/BottomNavigation/BottomNavigation";
import LoginPage from './pages/LoginPage/LoginPage';
import BestSellerPage from "../src/pages/BestSellerPage/BestSellerPage";
import Layout from "../src/components/Layout";

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={ <Layout> <HomePage /> </Layout> } />
        <Route path='/login' element={ <LoginPage/>}/>
        <Route path='/best-seller' element={ <Layout> <BestSellerPage/>  </Layout>}/>
      </Routes>
      <BottomNavigation/>
    </>
  );
}

export default App;
