import React, { useState } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.svg";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RiDiscountPercentLine } from "react-icons/ri";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const cartItemCount = 6;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user , setUser] = useState(true);
  return (
    <nav className="navbar p-2.5 h-20 w-full flex items-center shadow-md shadow-gray-400/30">
      <Container>
        <div className="flex items-center justify-between">
          <div className="left">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-16 h-16" />
            </Link>
          </div>
          <div className="center">
            <ul className="flex items-center justify-center gap-4">
            <li>
                <Link to={"/"} className="font-medium flex items-center justify-between gap-1 hover:text-green-600 hover:scale-105">
                  <RiDiscountPercentLine className="text-green-600 text-2xl" />
                  <p>التخفيضات</p>
                </Link>
              </li>
              <li>
                <Link to={"/"} className="font-medium transition-all duration-300 hover:text-green-600 hover:scale-105">
                  المفضله
                </Link>
              </li>
             {user && (
               <li>
               <Link to={"/"} className="font-medium transition-all duration-300 hover:text-green-600 hover:scale-105">
                 طلباتي
               </Link>
             </li>
             )}
              <li>
                <Link to={"/"} className="font-medium transition-all duration-300 hover:text-green-600 hover:scale-105">
                  الرئيسيه
                </Link>
              </li>
            </ul>
          </div>
          <div className="right relative flex items-center justify-between gap-8">
            <Link to={"/cart"} className="relative">
              <FiShoppingCart className="text-2xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-4 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <div className="avatar relative">
              <img src={avatar} alt="avatar-image" className="w-11 h-11 cursor-pointer" onClick={() => setDropdownOpen((prev) => !prev)}
              />
              {dropdownOpen && (
                <Dropdown />
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
