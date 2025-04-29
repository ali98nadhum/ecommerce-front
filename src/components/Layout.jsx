// Layout.jsx
import React, { useState } from "react";
import Navbar from "../utils/Navbar/Navbar";
import TopHeader from "../components/TopHeader/TopHeader"; 

const Layout = ({ children }) => {
    const [isBannerVisible , setIsBannerVisible] = useState(true);

    const topPadding = isBannerVisible ? 'pt-[128px] sm:pt-[144px]' : 'pt-[64px] sm:pt-[80px]';
  return (
    <div>
      <TopHeader />
      <Navbar isBannerVisible={isBannerVisible} setIsBannerVisible={setIsBannerVisible} />
      <main className={topPadding}> 
        {children}
      </main>
    </div>
  );
};

export default Layout;
