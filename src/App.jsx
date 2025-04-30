import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/Home/HomePage";
import BottomNavigation from "../src/utils/BottomNavigation/BottomNavigation";
import LoginPage from './pages/LoginPage/LoginPage';
import BestSellerPage from "../src/pages/BestSellerPage/BestSellerPage";
import DiscountPage from "../src/pages/DiscountPage/DiscountPage";
import CategoryPage from './pages/CategoryPage/CategoryPage';
import BrandsPage from './pages/BrandsPage/BrandsPage';
import Layout from "../src/components/Layout";

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={ <Layout> <HomePage /> </Layout> } />
        <Route path='/login' element={ <LoginPage/>}/>
        <Route path='/best-seller' element={ <Layout> <BestSellerPage/>  </Layout>}/>
        <Route path='/discount-product' element={ <Layout> <DiscountPage/> </Layout> }/>
        <Route path='/all-category' element={ <Layout> <CategoryPage/> </Layout> }/>
        <Route path='/all-brands' element={ <Layout> <BrandsPage/> </Layout> }/>
      </Routes>
      <BottomNavigation/>
    </>
  );
}

export default App;
