import React, { useState , useEffect } from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.svg";
import Container from "../../components/Container/Container";
import { Link , useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdFavoriteBorder} from "react-icons/md";
import { TfiDropbox } from "react-icons/tfi";
import { GoHome } from "react-icons/go";
import Dropdown from "../dropdown/Dropdown";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import TopHeader from "../../components/TopHeader/TopHeader";
import "./navbar.css";


const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const { t, i18n } = useTranslation();
  const cartItemCount = 6;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(true);
  
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

 
  if (pathname === "/login") {
    return null;
  }



  return (
    <div className="fixed top-0 left-0 z-50 w-full">
    <TopHeader/>
    <nav  className="navbar  p-2.5 h-16 sm:h-20 w-full flex items-center shadow-md shadow-gray-400/30 bg-white">
    <Container>
      <div className="flex items-center justify-between">
        {/* ===== Logo ===== */}
        <div className="left">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
          </Link>
        </div>
        {/* ===== Links ====== */}
        <div className="center hidden lg:flex items-center justify-center gap-4">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link
                to={"/"}
                className="font-medium flex items-center justify-between gap-1 transition-all duration-300 hover:text-green-600 hover:scale-105"
              >
                <GoHome className="text-green-600 text-2xl" />
                <p>{t('home')}</p>
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  to={"/"}
                  className="font-medium flex items-center justify-between gap-1 transition-all duration-300 hover:text-green-600 hover:scale-105"
                >
                  <TfiDropbox className="text-green-600 text-2xl" />
                  <p>{t('orders')}</p>
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/"}
                className="font-medium flex items-center justify-between gap-1 hover:text-green-600 hover:scale-105"
              >
                <RiDiscountPercentLine className="text-green-600 text-2xl" />
                <p>{t('offers')}</p>
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="font-medium flex items-center justify-between gap-1 transition-all duration-300 hover:text-green-600 hover:scale-105"
              >
                <MdFavoriteBorder className="text-green-600 text-2xl hover:text-red-600" />
                <p>{t('favorites')}</p>
              </Link>
            </li>
          </ul>
        </div>
        {/* ===== Rigth sec ===== */}
        <div className="right relative flex items-center justify-between gap-6 cursor-pointer">
          {/* language icon */}
          <LanguageSwitcher />
          {/* cart icon */}
          <Link to={"/cart"} className="relative">
            <FiShoppingCart className="text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-0.5 -right-4 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                {cartItemCount}
              </span>
            )}
          </Link>
          {/* avatar icon */}
          {user ? (
            <div className="avatar relative hidden lg:block">
              <img
                src={avatar}
                alt="avatar-image"
                className="w-11 h-11 cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
              />
              {dropdownOpen && (
                <div className="absolute top-full mt-1 right-0 z-50 animate-fade-in">
                  <Dropdown />
                </div>
              )}
            </div>
          ) : (
            // login button
            <Link
              to="/login"
              className="px-4 py-1.5 border-2 border-purple-600 text-purple-600 text-sm font-medium rounded-md hover:bg-purple-100 transition-all duration-300"
            >
              {t('login')}
            </Link>
          )}
        </div>
      </div>
    </Container>
  </nav>
  </div>
  );
};

export default Navbar;
