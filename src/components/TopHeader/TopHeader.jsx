import React, { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const TopHeader = () => {
  const [isBannerVisible , setIsBannerVisible] = useState(true);
  return (
    <>
    {isBannerVisible && (
        <div class="w-full h-16 flex items-center justify-between px-4 md:px-14 py-1 font-medium text-sm text-white text-center bg-gray-800">
        <div></div>
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          <p className="sm:text-[18px]">تخفيضات كبيره كل شهر</p>
          <CiDiscount1 className="text-amber-500 text-3xl" />
        </div>
        <button onClick={() => setIsBannerVisible(false)}>
          <IoClose className="text-white text-3xl cursor-pointer" />
        </button>
      </div>
    )}
    </>
  );
};

export default TopHeader;
