import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { TfiDropbox } from "react-icons/tfi";
import { CiDiscount1 } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const BottomNavigation = () => {
    const location = useLocation();
  const { pathname } = location;

  return (
    <div className="fixed left-0 right-0 bottom-0 sm:hidden">
      <div className="flex items-center justify-between p-4 mx-1 h-16 bg-white rounded-2xl shadow-[0_-1px_5px_rgba(0,0,0,0.1)] border-t border-gray-200">
        
        <Link to="/" className="flex items-center justify-center flex-col">
          <GoHome className={`text-2xl ${pathname === "/" ? "text-blue-500" : "text-gray-400"}`} />
          <p className={`text-[14px] ${pathname === "/" ? "text-blue-500" : ""}`}>الرئيسيه</p>
        </Link>

        <Link to="/orders" className="flex items-center justify-center flex-col">
          <TfiDropbox className={`text-2xl ${pathname === "/orders" ? "text-blue-500" : "text-gray-400"}`} />
          <p className={`text-[14px] ${pathname === "/orders" ? "text-blue-500" : ""}`}>طلباتي</p>
        </Link>

        <Link to="/discounts" className="flex items-center justify-center flex-col">
          <CiDiscount1 className={`text-2xl ${pathname === "/discounts" ? "text-blue-500" : "text-gray-400"}`} />
          <p className={`text-[14px] ${pathname === "/discounts" ? "text-blue-500" : ""}`}>التخفيضات</p>
        </Link>

        <Link to="/favorites" className="flex items-center justify-center flex-col">
          <MdFavoriteBorder className={`text-2xl ${pathname === "/favorites" ? "text-blue-500" : "text-gray-400"}`} />
          <p className={`text-[14px] ${pathname === "/favorites" ? "text-blue-500" : ""}`}>المفضله</p>
        </Link>

        <Link to="/account" className="flex items-center justify-center flex-col">
          <FaRegUserCircle className={`text-2xl ${pathname === "/account" ? "text-blue-500" : "text-gray-400"}`} />
          <p className={`text-[14px] ${pathname === "/account" ? "text-blue-500" : ""}`}>الحساب</p>
        </Link>

      </div>
    </div>
  );
};

export default BottomNavigation;
